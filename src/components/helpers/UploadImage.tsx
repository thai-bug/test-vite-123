/* eslint-disable @typescript-eslint/no-explicit-any */

import { uploadImage } from "@/services/files/file.api";
import { PlusOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Divider, Upload, UploadFile } from "antd";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

interface IProps {
  fileList?: UploadFile<any>[];
  setFileList?: React.Dispatch<React.SetStateAction<UploadFile<any>[]>>;
  accept?: string;
}

function UploadImage({ fileList, setFileList, accept }: IProps) {
  const uploadImageMutate = useMutation({
    mutationFn: uploadImage,
    onMutate(variables: FormData) {
      const data: any = variables.get("file");

      if (!data) {
        return;
      }
      setFileList?.([
        ...(fileList || []),
        {
          uid: data.uid,
          name: data.name,
          type: data.type,
          size: data.size,
          status: "uploading",
        },
      ]);
    },
    onSuccess: (res, variables) => {
      console.log("🚀 ~ UploadImage ~ res:", res);
      const data: any = variables.get("file");
      const temp = [...(fileList || [])];
      const index = temp.findIndex((item) => item.uid === data.uid);
      if (index > -1) {
        temp[index].status = "done";
        temp[index].url = res?.trim();

        setFileList?.(temp);
      }
    },
    onError: (err: AxiosError<{ message: string }>) => {
      toast.error(err.response?.data?.message || "");
    },
  });

  return (
    <>
      <Upload
        accept={accept}
        customRequest={(e) => {
          const form = new FormData();
          form.append("file", e.file);

          uploadImageMutate.mutate(form);
        }}
        listType="picture-circle"
        fileList={fileList}
        onRemove={(e) => {
          const temp = [...(fileList || [])];
          setFileList?.(temp.filter((item) => item.uid !== e.uid));
        }}
      >
        {(fileList || [])?.length >= 3 ? null : (
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}></div>
          </div>
        )}
      </Upload>

      <Divider />
    </>
  );
}

export default UploadImage;
