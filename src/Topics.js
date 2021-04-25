import React from 'react';
import { Route, Switch, NavLink, useParams} from 'react-router-dom';

var contents = [
  {id:1, title: 'topic1', desc:'tops1 desc'},
  {id:2, title: 'topic2', desc:'tops2 desc'},
  {id:3, title: 'topic3', desc:'tops3 desc'},
]
function Topic() {
  var params = useParams();
  var topic_id =  params.topic_id;
  console.log(params, params.topic_id);
  var selected_topic = {
    title : 'Not Found',
    desc : "NO",
  }
  contents.forEach((obj, idx)=>{
    console.log(idx, obj);
    if(obj.id == Number(topic_id)) {
      selected_topic = contents[idx];
    }
  })
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      <p>{selected_topic.desc}</p>
    </div>
  )
}
const Topics = () => {
  var lis = [];
  for (var i=0; i<contents.length; i++){
    lis.push(<li key={contents[i].id}><NavLink to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>);
  }

  return (
    <div>
      <h1>Topics</h1>
      <p>토픽 페이지</p>
      <ul>
          {/* <li>
            <NavLink to="/topics/1">1111</NavLink>
          </li>
          <li>
            <NavLink to="/topics/2">2222</NavLink>
          </li>
          <li>
            <NavLink to="/topics/3">3333</NavLink>
          </li> */}
          {lis}
        </ul>
        
        <Route path="/topics/:topic_id"><Topic></Topic></Route>

        {/* <Switch>
          <Route path="/topics/1">topics1</Route>
          <Route path="/topics/2">topics2</Route>
          <Route path="/topics/3">topics3</Route>
        </Switch> */}


    </div>
  );
};

export default Topics;