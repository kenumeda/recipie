import React from "react";
import { Card, Col, Input, Row, Tabs, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";

const { Text } = Typography;

const items = [
  {
    key: "1",
    label: `Tab 1`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: "2",
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: "3",
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
];

const onChange = (key) => {
  console.log(key);
};

const HomePage = () => {
  return (
    <div>
      <Row>
        <Col>
          {" "}
          <div className="input">
            <Text className="keyword"> Keyword</Text>
            <Input
              placeholder="Search Food | Ingridients"
              suffix={<SearchOutlined />}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="tabs">
            <Text className="popular-keyword">Popular Keyword</Text>
            <Tabs className="tabs" items={items} onChange={onChange} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Row>{" "}
    </div>
  );
};

export default HomePage;
