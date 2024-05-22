import { Button, Checkbox, Col, Form, Input, Modal, Row, message } from 'antd';
import React, { useRef, useState } from 'react';
import ProductCard from '../components/ProductCard';
import emailjs from '@emailjs/browser';

const Testingb = () => {
  const [balance, setBalance] = useState(2000);
  const inputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const products = [
    { id: 1, name: "Maserati SUV", image: 'https://i.ibb.co/XzPPSZD/maserati.jpg', price: 400 },
    { id: 2, name: "Villa", image: 'https://i.ibb.co/DtLpngZ/villa.jpg', price: 1600 },
    { id: 3, name: "Daire", image: 'https://i.ibb.co/m648gzk/pexels-photo-6492397.webp', price: 700 },
    { id: 4, name: "Arsa Yatırımı", image: 'https://i.ibb.co/9T9hZHj/arsa.jpg', price: 500 },
    { id: 5, name: "Motorsiklet", image: 'https://i.ibb.co/WKt6gxJ/motor.jpg', price: 100 },
    { id: 6, name: "Karavan", image: 'https://i.ibb.co/1Rtt6G1/karavan.webp', price: 150 },
    { id: 7, name: "Fiat Egea", image: 'https://i.ibb.co/3Yk6bnm/egea.jpg', price: 100 },
    { id: 8, name: "Iphone 16 Pro Max", image: 'https://i.ibb.co/5kQ7TXv/iphone-16.jpg', price: 50 },
    { id: 9, name: "At", image: 'https://i.ibb.co/rxCBrzj/at2.webp', price: 100 },
  ];

  const onCheckboxChange = (checkedValues) => {
    const total = checkedValues.reduce((sum, id) => {
      const product = products.find((product) => product.id === id);
      return sum + (product ? product.price : 0);
    }, 0);
    setBalance(2000 - total);
  };

  const onFinish = (values) => {
    const total = values.checkbox.reduce((sum, id) => {
      const product = products.find((product) => product.id === id);
      return sum + (product ? product.price : 0);
    }, 0);
    var templateParams = {
      to_name: values.username,
      message: `harcanan toplam tutar ${total} toplam ${values.checkbox.length} adet`,
    };

    emailjs
      .send('service_m8k1oe9', 'template_wm9f69g', templateParams, {
        publicKey: 'hCtPLfA3TPLJRqDht',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          showModal();
        },
        (error) => {
          console.log('FAILED...', error.text);
          message.error('Form gönderilmedi')
        },
      );
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    inputRef.current.focus();
  };


  return (
    <div className='testingb' style={{ alignItems: 'center', backgroundColor:'rgb(246, 0, 2, 0.4)' }}>
      <div className="fixed-balance">
        <span>Bakiye:</span>
        <span className={balance < 0 ? 'balance-eksi' : 'balance'}>{"\u00A0"}{balance}</span>
      </div>
      <div style={{ margin: '100px' }}>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          style={{
            maxWidth: 1200,
            margin: '0 auto',
          }}
        >
          <Form.Item >
            <span className="ant-form-text">2000 birim bütçeniz var aşağıdaki seçeneklerden seçim yapabilirsiniz</span>
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'varsa bi kullanıcı adı alabilir miyim',
              },
            ]}
          >
            <Input style={{ width: '300px' }} ref={inputRef}/>
          </Form.Item>

          <Form.Item name="checkbox">
            <Checkbox.Group onChange={onCheckboxChange}>
              <Row gutter={[20, 20]} style={{ display: 'flex', flexWrap: 'wrap' }}>
                {products.map((product) => (
                  <Col key={product.id}>
                    <Checkbox value={product.id}>
                      <ProductCard product={product} />
                    </Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item>
            <Button type="primary" danger htmlType="submit" style={{ width: '300px', marginTop: '60px' }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Form hayırlısı ile gönderildi</p>
      </Modal>
    </div>
  );
};

export default Testingb;
