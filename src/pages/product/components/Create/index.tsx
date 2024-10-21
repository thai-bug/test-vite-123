import { RoutesState } from '@/states/route.state';
import { getRouteApi } from '@tanstack/react-router';
import { Card, Collapse } from 'antd';
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil';
import CreateForm from './components/CreateForm';

const routeApi = getRouteApi("/product/create");

const CreateProduct = () => {

  const setRoutesPath = useSetRecoilState(RoutesState);

  useEffect(() => {
    setRoutesPath([
      {
        path: "/product",
        name: "Product",
      },
      {
        path: `/product/create`,
        name: "Create",
      },
    ]);
  }, [setRoutesPath]);

  return (
    <div>
      <Card title={`Create Product`}>
        <CreateForm />
      </Card>
    </div>
  )
}

export default CreateProduct