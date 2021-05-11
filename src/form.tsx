import React, { useContext } from 'react';
import { Form, Input } from 'antd';
import { LibrarianActionContext } from './providers/librarian/context';

const FormItem = Form.Item;

export const FormComponent = () => {
  const { createLibrarian } = useContext(LibrarianActionContext);
  const [form] = Form.useForm();

  const submit = () => {
    const localLibrarian = form.getFieldsValue();
    createLibrarian(localLibrarian);
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      md: { span: 8 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      md: { span: 16 },
      sm: { span: 16 },
    },
  };

  return (
    <div style={{ width: '100%' }}>
      <Form form={form} {...formItemLayout} style={{ width: '100%' }}>
        <FormItem label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </FormItem>

        <FormItem label="Surname" name="surname" rules={[{ required: true }]}>
          <Input />
        </FormItem>

        <FormItem label="LibrarianNumber" name="librarianNumber">
          <Input />
        </FormItem>

        <FormItem>
          <button onClick={submit}>Submit</button>
        </FormItem>
      </Form>
    </div>
  );
};
