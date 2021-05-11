import React from 'react';
import { Button, Form } from 'antd';
import { useLibrarians } from './providers/librarian';

const FormItem = Form.Item;

export const FormDisplayComponent = () => {
  const { librarian, displayMode, toggleDisplayMode } = useLibrarians();

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
      <Form {...formItemLayout} style={{ width: '100%' }}>
        <FormItem label="Name">{librarian?.name}</FormItem>

        <FormItem label="Surname">{librarian?.surname}</FormItem>

        <FormItem label="LibrarianNumber">{librarian?.librarianNumber}</FormItem>
      </Form>
      <Button type="primary" onClick={() => toggleDisplayMode(!displayMode)}>
        Back to form
      </Button>
    </div>
  );
};
