import React, { useContext, useEffect } from 'react'
import { Button, Card, Divider, Form } from '@douyinfe/semi-ui'
import { IconArrowRight } from '@douyinfe/semi-icons'
import { useMutation } from "@tanstack/react-query"
import { login } from '@/services/auth'
import toast from 'react-hot-toast'
import { AuthContext } from '@/contexts/AuthContext'

interface ILogin {
  username: string,
  password: string
}

const LoginPage = () => {

  const { user } = useContext(AuthContext);

  const loginMutate = useMutation({
    mutationFn: login,
    onSuccess: (res: { accessToken: string; refreshToken: string }) => {
      localStorage.setItem("accessToken", res?.accessToken as string);
      localStorage.setItem("refreshToken", res?.refreshToken as string);
      toast.success("Login success !")

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    },
    onError: () => {
      toast.error("Login failed !");
    },
  })

  const onSubmit = (values: ILogin) => {
    loginMutate.mutate(values)
  };

  useEffect(() => {
    if (user) {
      window.location.href = "/";
    }
  }, []);

  return (
    <>
      <div onClick={() => window.history.back()}>
        <IconArrowRight style={{ fontSize: "25px", cursor: "pointer" }} className='right-[20px] top-[20px] absolute' />
      </div>
      <div className="grid place-items-center h-screen">
        <Card className="w-full lg:w-1/2 xl:w-1/2 2xl:max-w-[600px] md:w-full">
          <Form layout="vertical" onSubmit={onSubmit}>
            <Form.Input
              field="username"
              label="Username"
              placeholder={"Username"}
              required
            />

            <Form.Input
              field="password"
              label="Password"
              placeholder={"Password"}
              mode="password"
              required
            />

            <Divider />

            <div className="my-2 ">
              <Button
                loading={loginMutate.isPending}
                block
                htmlType="submit"
                theme="outline"
              >
                Login
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </>
  )
}

export default LoginPage