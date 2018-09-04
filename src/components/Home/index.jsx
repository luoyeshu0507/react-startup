import DeveloperNav from 'components/TopBar/developerNav'
import Footer from 'components/Footer'
import { Link } from 'react-router-dom'
import { Col, Row } from 'antd'
import style from './style.scss'

import deploy from './images/deploy.png'
import invoke from './images/invoke.png'
import monitoring from './images/monitoring.png'
import valueOutput from './images/value-output.png'
import hetong from './images/hetong.png'
import hetong2 from './images/hetong-active.png'
import jinrong from './images/jinrong.png'
import jinrong2 from './images/jinrong-active.png'
import fangwei from './images/fangwei.png'
import fangwei2 from './images/fangwei-active.png'
import zhihui from './images/zhihui.png'
import zhihui2 from './images/zhihui-active.png'
import qulian from './images/qulian.png'

const applicationScenario = [
  {
    name: '合同存证',
    image: hetong,
    activeImage: hetong2,
    detailTitle: '在线签订合同，哈希存证校验',
    detailText: '目前国内的资产流动过程中，信用担保业务起到了很关键的作用，但是依然存在很大信誉问题。将区块链技术用于存证相比于现有的存证系统有很多天然的优势。 BaaS云平台利用区块链技术的多级加密、不可篡改和可追溯的特点提供合同存证的业务应用，改变了合同存证原有的业务模式，极大程度上规避了合同存证中潜 在的诸多不可靠因素。'
  },
  {
    name: '供应链金融',
    image: jinrong,
    activeImage: jinrong2,
    detailTitle: '信用多级传递，释放金融价值',
    detailText: '供应链金融服务平台以金票的形式将数字资产安全、完整、永久地登记于所有区块链节点，实现了平台各参与方的快速确认和实时共享同步，解决了核心企业、资金方、保理商等参与方之间的互信问题。分布式账本技术为平台优质资产打包与转让提供了全流程可追溯、穿透式资产确权和验真渠道。趣链BaaS云平台提供供应链金融业务场景，实现供应链金融信息流和资金流的全生命周期管理，通过搭建应收账款信息沟通桥梁，助力中小型企业更加便捷地开展应收账款融资业务，为中小企业融资难问题提供新的解决方式。'
  },
  {
    name: '防伪溯源',
    image: fangwei,
    activeImage: fangwei2,
    detailTitle: '全流程追溯，记录不可篡改',
    detailText: '在当前复杂的市场环境下，产业供应链的各个环节中都会存在由于信息不对称所导致的商品造假行为，极大的扰乱了市场秩序和侵犯了消费者的权益。BaaS云平台针对这一普遍存在的业务痛点，提出了基于物联网和区块链技术的产品防伪溯源解决方案，将供应链业务全流程进行数据的处理和记录，增强了供应链各个环节之间的可信任程度，也为消费者提供了伪劣产品溯源的新途径。'
  },
  {
    name: '智慧政务',
    image: zhihui,
    activeImage: zhihui2,
    detailTitle: '打造智慧城市，提升政府公信力',
    detailText: '区块链的目标是构建信任互联网，从简单的共识跨越到建立真正的信任，这在社会治理领域也是一个前所未有的创新。信任的建立依赖于信用体系的建设，这将是人类社会面临的长期的挑战，基于区块链的公开透明和不可篡改的特征，可以构建去中心化的信用基础设施。通过区块链提供的激励机制，使得参与者在交易过程中长期累积下来的信用得到正向的回馈，同时欺诈和造假者也会得到负向的激励，进而促进整个社会信用体系的建设,为经济体系的运转和社会治理提供可靠的信用保证。'
  }
]

export default class extends React.PureComponent {
  state = {
    index: 0
  }

  render() {
    return (
      <div className={style['home']}>
        <DeveloperNav />
        <div className="app-content-bottom">
          <div className="home-content">
            <div className="banner">
              <Row>
                <Col span={20} offset={2} style={{paddingTop: 90}}>
                  <div className="text">
                    CBaaS<br/>一站式区块链服务，打造区块链+生态
                  </div>
                  <Link to="/portal">马上体验</Link>
                </Col>
              </Row>
            </div>
            <div className="data">
              <Row>
                <Col span={5} offset={2}>
                  <span>区块链数</span>
                  <em>300</em>
                  <i className="iconfont icon-qukuailianshu"></i>
                </Col>
                <Col span={5}>
                  <span>节点总数</span>
                  <em>300</em>
                  <i className="iconfont icon-jiedianzongshu"></i>
                </Col>
                <Col span={5}>
                  <span>区块高度</span>
                  <em>300</em>
                  <i className="iconfont icon-qukuaigaodu"></i>
                </Col>
                <Col span={5}>
                  <span>交易笔数</span>
                  <em>300</em>
                  <i className="iconfont icon-jiaoyibishu"></i>
                </Col>
              </Row>
            </div>
            <div className="feature">
              <div className="text">
                <div className="title1">产品特性</div>
                <div className="des">CBaaS 为您提供秒级响应、性能卓越、安全稳定的云计算服务</div>
              </div>
              <Row>
                <Col span={5} offset={2}>
                  <img src={valueOutput} />
                  <div className="title2">区块链价值输出</div>
                  <div className="des">封装区块链服务，向上赋能业务场景 一站式搭建区块链应用，向下依托云服务 创造金融业务价值</div>
                </Col>
                <Col span={5}>
                  <img src={monitoring} />
                  <div className="title2">多维度运维监控</div>
                  <div className="des">可视化的监控管理及多渠道的预警机制 帮助企业开发、运维人员提升故障排除效率 保障区块链系统正常运行</div>
                </Col>
                <Col span={5}>
                  <img src={deploy} />
                  <div className="title2">智能合约一键部署</div>
                  <div className="des">提供智能合约模板及编辑工具 降低企业开发人员的合约编写门槛 提升合约编写体验</div>
                </Col>
                <Col span={5}>
                  <img src={invoke} />
                  <div className="title2">可视化资源调度</div>
                  <div className="des">细化并封装计算、网络及存储资源 提供基于容器的区块链节点的交付 可视化资源编排调度及容器运行时服务</div>
                </Col>
              </Row>
            </div>
            <div className="intro">
              <div className="title1">产品&平台简介 </div>
              <div className="des">建设银行区块链服务CBaaS，专注于支持应用在云环境中释放业务价值。平台推出特定业务场景下的区块链一站式解决方案，为金融创新提供了完善的技术和服务支持，将用户从繁琐、重复性的开发任务中解脱出来。基于开放共享的BaaS云平台，用户可以轻松便捷的构建自己的区块链服务和金融基础设施，搭建稳定、可靠的区块链应用。 </div>
            </div>
            <div className="app">
              <div className="text">
                <div className="title1">应用场景</div>
                <div className="des">已经覆盖多个应用场景，如果您还不知道CBaaS可以干什么</div>
              </div>
              <Row>
                {
                  applicationScenario.map((item, index) => (
                    <Col key={index} onMouseEnter={this.clickHandle.bind(this, index)} span={5} offset={index === 0? 2: 0} className={this.state.index === index? 'active': ''}>
                      <div className="image">
                        <img src={this.state.index === index? item.activeImage: item.image} alt=""/>
                      </div>
                      <div className="title2">{item.name}</div>
                    </Col>
                  ))
                }
              </Row>
            </div>
            <div className="app-detail">
              <div className="title2">{applicationScenario[this.state.index].detailTitle}</div>
              <div className="des">{applicationScenario[this.state.index].detailText}</div>
            </div>
            <div className="collaborate">
              <div className="text">
                <div className="title1">合作伙伴</div>
                <div className="des">每天都有新的机构和开发者在加入CBaaS，期待您的加入！</div>
              </div>
              <Row gutter={16}>
                <Col span={4} offset={2}>
                  <a href="http://www.hyperchain.cn/" target="_blank">
                    <img src={qulian} alt=""/>
                  </a>
                </Col>
              </Row>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    )
  }

  clickHandle = (index) => {
    this.setState({
      index
    })
  }
}
