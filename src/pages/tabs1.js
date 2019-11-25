import React from 'react';
import { Tabs, Radio } from 'antd';
import 'aos/dist/aos.css';
import 'antd/dist/antd.css';
import "../static/css/carousel.css";
const { TabPane } = Tabs;
class Tabs1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }

  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    const { mode } = this.state;
    return (
      <div>
        <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          <Radio.Button value="top">Horizontal</Radio.Button>
          <Radio.Button value="left">Vertical</Radio.Button>
        </Radio.Group>
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
          {[...Array(30).keys()].map(i => (
            <TabPane tab={`Tab-${i}`} key={i}>
              Content of tab {i}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}
export default Tabs1;