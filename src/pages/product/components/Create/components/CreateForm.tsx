/* eslint-disable @typescript-eslint/no-explicit-any */
import { createProduct } from "@/services/product/product";
import { PlusOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import {
  Button,
  Col,
  Input,
  InputNumber,
  Row,
  Upload,
  Form as AntForm,
  Form,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";

const CreateForm = () => {
  const { control, handleSubmit } = useForm(); // Use react-hook-form
  const createProductMutate = useMutation({
    mutationKey: ["createProduct"],
    mutationFn: createProduct,
    onSuccess: () => {
      toast.success("Create product successfully!");
    },
    onError: () => {
      toast.error("Create product failed!");
    },
  });

  const onFinish = (data: any) => {
    createProductMutate.mutate(data);
  };

  return (
    <Form onFinish={handleSubmit(onFinish)} layout="vertical">
      <AntForm.Item>
        <Upload action="/upload.do" listType="picture-card">
          <button style={{ border: 0, background: "none" }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </button>
        </Upload>
      </AntForm.Item>
      <Row gutter={16}>
        <Col span={12}>
          <AntForm.Item label="Name" rules={[{ required: true }]}>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input {...field} placeholder="Product Name" />
              )}
            />
          </AntForm.Item>
        </Col>

        <Col span={12}>
          <AntForm.Item label="Price" rules={[{ required: true }]}>
            <Controller
              name="price"
              control={control}
              rules={{ required: true }}
              defaultValue={1}
              render={({ field }) => (
                <InputNumber {...field} min={1} style={{ width: "100%" }} />
              )}
            />
          </AntForm.Item>
        </Col>
      </Row>
      <AntForm.Item label="Description">
        <Controller
          name="description"
          control={control}
          render={({ field }) => <TextArea {...field} rows={4} />}
        />
      </AntForm.Item>
      <div className="flex justify-end">
        <Button
          htmlType="submit"
          type="primary"
          className="font-bold"
          loading={createProductMutate?.isPending}
        >
          Create
        </Button>
      </div>
    </Form>
  );
};

export default CreateForm;
