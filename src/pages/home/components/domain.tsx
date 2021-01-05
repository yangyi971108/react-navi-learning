import React from 'react';
import {connect} from 'dva';
import { Card, Col } from 'antd';
import styles from '@/pages/home/index.css';

class Domain extends React.Component<any, any> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const {domains, clickDomainCard} = this.props;
    
    return(
      <Card title='数据结构' >
      <div style={{height:800,width:800,position: 'relative',left:500}}  onClick={()=>clickDomainCard('数据结构')}>
      <img
          alt = {'数据结构'}
          src = {require('../../../assets/1.png')}
          width={700}
          height = {700}
  
        />
      </div>
      </Card>
    )
  }

  componentDidMount(): void {
    const {currentSubjectName} = this.props;
    this.props.dispatch({
      type: 'home/getDomains',
      payload: {
        currentSubjectName,
      },
    });
  }
}

function mapPropsToState(state: any) {
  const {domains, currentSubjectName} = state.home;
  return {
    domains,
    currentSubjectName
  };
}

export default connect(mapPropsToState)(Domain);
