import React, { useContext, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/auth";
import toast from "react-hot-toast";
import { AuthContext } from "@/contexts/AuthContext";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Card, Input, Typography } from "antd";
import { Controller, useForm } from "react-hook-form";

interface ILogin {
  username: string;
  password: string;
}

const LoginPage = () => {
  const { user } = useContext(AuthContext);
  const { control, handleSubmit } = useForm<ILogin>();

  const loginMutate = useMutation({
    mutationFn: login,
    onSuccess: (res: { accessToken: string; refreshToken: string }) => {
      localStorage.setItem("accessToken", res?.accessToken as string);
      localStorage.setItem("refreshToken", res?.refreshToken as string);
      toast.success("Login success !");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    },
    onError: () => {
      toast.error("Login failed !");
    },
  });

  const onSubmit = (values: ILogin) => {
    loginMutate.mutate(values);
  };

  useEffect(() => {
    if (user) {
      window.location.href = "/";
    }
  }, [user]);

  return (
    <>
      <div onClick={() => window.history.back()}>
        <ArrowRightOutlined
          style={{ fontSize: "25px", cursor: "pointer" }}
          className="right-[20px] top-[20px] absolute"
        />
      </div>
      <div className="grid place-items-center h-screen">
        <Card className="w-full lg:w-1/2 xl:w-1/2 2xl:max-w-[600px] md:w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-y-2">
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <div>
                    <Typography.Text>Username</Typography.Text>
                    <Input
                      {...field}
                      placeholder={"Username"}
                      required
                      size="large"
                    />
                  </div>
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <div>
                    <Typography.Text>Password</Typography.Text>
                    <Input.Password
                      {...field}
                      placeholder={"Password"}
                      required
                      size="large"
                    />
                  </div>
                )}
              />

              <Button
                htmlType="submit"
                size="large"
                loading={loginMutate.isPending}
              >
                <Typography.Text>Login</Typography.Text>
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
