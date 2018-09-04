import { Col, Row, Icon } from 'antd'
import { Link } from 'react-router-dom'
import style from './style.scss'

export default class extends React.PureComponent {
  render() {
    return (
      <div className="footer">
        <Row gutter={16}>
          <Col span={15} offset={2}>
            <div className="links">
              <Link to="">CBaas官网</Link>
              <Link to="">开发者平台</Link>
              <Link to="">问答社区</Link>
              <Link to="">技术支持</Link>
              <Link to="">服务状态</Link>
            </div>
            <div className="copyright">Copyright © 2016 Hyperchain Technologies Co., Ltd.  All rights reserved.  浙ICP备16033604号-1</div>
          </Col>
          <Col span={5}>
            <div className="phone">
              <span>
                <Icon type="customer-service" />
                400-800-821
              </span>
              <em>24小时售前服务</em>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
