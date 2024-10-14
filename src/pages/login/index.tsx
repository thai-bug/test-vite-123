import React from 'react'
import { Button, Card, Divider, Form } from '@douyinfe/semi-ui'
import { IconArrowRight } from '@douyinfe/semi-icons'
import { useNavigate, useRouter } from '@tanstack/react-router'

const LoginPage = () => {

  const navigate = useNavigate()
  const onSubmit = () => {

  }

  return (
    <>
      <div onClick={() => window.history.back()}>
        <IconArrowRight style={{ fontSize: "25px", cursor: "pointer" }} className='right-[20px] top-[20px] absolute' />
      </div>
      <div className="grid place-items-center h-screen">
        <Card className="w-full lg:w-1/2 xl:w-1/2 2xl:max-w-[600px] md:w-full">
          <Form layout="vertical" onSubmit={onSubmit}>
            <Form.Input field="email" label="Email" placeholder={"Email"} />
            <Form.Input
              field="password"
              label="Password"
              placeholder={"Password"}
              mode="password"
            />

            <Divider />

            <div className="my-2 ">
              <Button
                // loading={loginMutate.isPending}
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