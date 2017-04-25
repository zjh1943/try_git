import React from "react";
import {Diff2Html} from "diff2html"


export default class PlaygroundHelloWorld extends React.Component {

  renderDiff(diffText){
    let obj = Diff2Html.getJsonFromDiff(diffText);
    return Diff2Html.getPrettyHtml(obj);
  }
  render() {
    let diff1 = `
    
    
`;
    return <div>
    </div>
  }
}
