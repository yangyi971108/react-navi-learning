import React from 'react';
import {isEqual} from 'lodash';
// @ts-ignore
import {drawMap} from '../../../modules/topicDependenceVisualization';
import Axios from 'axios';

class Forest extends React.Component<any, any> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div>
        <svg id="map" width="800" height="800">
        </svg>
        <svg
          id="tree"
          style={{
            position: 'absolute',
            left: 10,
            marginLeft: 240,
            visibility: 'hidden',
            top: 10,
            marginTop: 56
          }}>
        </svg>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (isEqual(nextProps, this.props)) return false;
    const {currentDomainName, clickTopic, clickFacet, learningPath} = nextProps;
    if (currentDomainName) {
      const treesvg = document.getElementById('tree');
      const svg = document.getElementById('map');
      emptyChildren(treesvg);
      emptyChildren(svg);
      Axios.get('http://47.95.145.72:80/dependences/?domainName=' + currentDomainName)
           .then(res => {
            drawMap(res.data,svg, treesvg, currentDomainName, learningPath, (topicId: number, topicName: string) => {clickTopic(topicName)}, clickFacet);
           })
           .catch(e=>console.log(e));
     // drawMap(svg, treesvg, currentDomainName, learningPath, (topicId: number, topicName: string) => {clickTopic(topicName)}, clickFacet);
    }
    return false;
  }

  componentDidMount(): void {
    const {currentDomainName, clickTopic, clickFacet, learningPath} = this.props;
    if (currentDomainName) {
      const treesvg = document.getElementById('tree');

      const svg = document.getElementById('map');
      console.log("svg,treesvg,currentDomainName,learningPath",svg,treesvg,currentDomainName,learningPath)
      Axios.get('http://47.95.145.72:80/dependences/?domainName=' + currentDomainName)
           .then(res => {
            drawMap(res.data,svg, treesvg, currentDomainName, learningPath, (topicId: number, topicName: string) => {clickTopic(topicName)}, clickFacet);
           })
           .catch(e=>console.log(e));
      
    }
  }


}

function emptyChildren(dom: HTMLElement | null): void {
  if (!dom) return;
  const children = dom.childNodes;
  while (children.length > 0) {
      dom.removeChild(children[0]);
  }
}

export default Forest;
