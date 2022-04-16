// Imports
import React from "react";
import { Typography, Select } from "antd";
const { Title } = Typography;
const { Option } = Select;

// Title segment container
export default function TitleSegment({
    svgTitle,
    svgNameList,
    changeCurrentSVG,
}) {
    // struct fot top sections

    // JSX component for the title segment
    return (
        <>
            <Title>SVG from a Decentralized Database Viewer</Title>

            <Title level={2}>
                Current display: <b>{svgTitle}</b>
            </Title>

            <Select
                defaultValue={svgNameList[0]}
                style={{ width: 360 }}
                onChange={changeCurrentSVG}
            >
                {}
                {svgNameList.map((svgName) => {
                    return <Option value={svgName}>{svgName}</Option>;
                })}
            </Select>
        </>
    );
}