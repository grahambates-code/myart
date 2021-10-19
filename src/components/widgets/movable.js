import React, { useRef, useState } from 'react';
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import {Mutation} from "react-apollo";
import Saver from "./Saver";

export function App() {
    const logo = useRef(null);

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    return (
            <SVG ref={logo} src="/starcopy.svg" />
    );
}

class Rect extends React.Component {
    constructor() {
        super();
        this.state = {rect: {x: 0, y: 0}};
    }

    render() {

        const {asset, refetch} = this.props;

        //return   <SomeComponent/>
        return (
            <div>

                <svg width={'600'} height={'600'} viewBox="0 0 600 600" ref={(svg) => this.svg = svg}>

                    {/*this should be a map assets => Component*/}

                    <Saver refetch={refetch}>

                        {(MyMutation, { loading, error }) => {
                            // if (loading) return null

                            return <g>
                                <g
                                    transform={`translate(${this.state.rect.x},${this.state.rect.y})`}
                                    ref={(e) => this.svgRectElem = e}
                                    onMouseDown={(e) => this.startDrag(e, this.svgRectElem)}
                                    onMouseUp={() => {
                                        MyMutation({variables : {asset_id : asset.id, x : this.state.rect.x}})
                                    } }
                                >
                                    <rect
                                        x={0}
                                        y={0}
                                        width="120"
                                            height="120"></rect>
                                </g>
                            </g>

                        }}

                    </Saver>


                </svg>
                Position: <br />
                X: {this.state.rect.x}<br />
                Y: {this.state.rect.y}
            </div>
        );
    }

    startDrag(event, draggedElem) {
        event.preventDefault();
        let point = this.svg.createSVGPoint();
        point.x = event.clientX;
        point.y = event.clientY;
        point = point.matrixTransform(this.svg.getScreenCTM().inverse());
        this.setState({dragOffset: {
                x: point.x - this.state.rect.x,
                y: point.y - this.state.rect.y
            }});

        const mousemove = (event) => {
            event.preventDefault();
            point.x = event.clientX;
            point.y = event.clientY;
            let cursor = point.matrixTransform(this.svg.getScreenCTM().inverse());
            this.setState({rect: {
                    x: cursor.x - this.state.dragOffset.x,
                    y: cursor.y - this.state.dragOffset.y
                }});
        };

        const mouseup = (event) => {
            document.removeEventListener("mousemove", mousemove);
            document.removeEventListener("mouseup", mouseup);
        };

        document.addEventListener("mousemove", mousemove);
        document.addEventListener("mouseup", mouseup);
    }
}

export default Rect;
