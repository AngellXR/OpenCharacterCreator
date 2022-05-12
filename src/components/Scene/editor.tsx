/* eslint-disable */
import { Avatar } from "@mui/material";
import * as React from "react";
import { useGlobalState } from "../GlobalProvider";
import "./style.scss";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import accessoriesIcon from '../../assets/media/accessories.png';
import legsIcon from '../../assets/media/legs.png';
import shoesIcon from '../../assets/media/shoes.png';
import pantsIcon from '../../assets/media/pants.png';
import neckIcon from '../../assets/media/neck.png';
import armsIcon from '../../assets/media/arms.png';
import shirtIcon from '../../assets/media/shirt.png';
import faceIcon from '../../assets/media/face.png';
import hairIcon from '../../assets/media/hair.png';
import colorIcon from '../../assets/media/color.png';


export default function Editor(props: any) {
  const { editor, wrapClass }: any = props;
  const { category, setCategory }: any = useGlobalState();
  return (
    <div className="editor-wrap">
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <div onClick={() => setCategory('color')} className={ category && category === "color" ? "selector-button active" : "selector-button" }>
          <Avatar className="icon" src={colorIcon} />
          <br />
          Skin Tone
        </div>
        <div onClick={() => setCategory('hair')} className={ category && category === "hair" ? "selector-button active" : "selector-button" }>
          <Avatar className="icon" src={hairIcon} />
          <br />
          Hair
        </div>
        <div onClick={() => setCategory('face')} className={ category && category === "face" ? "selector-button active" : "selector-button" }>
          <Avatar className="icon" src={faceIcon} />
          <br />
          Face
        </div>
        <div onClick={() => setCategory('tops')} className={ category && category === "tops" ? "selector-button active" : "selector-button" }>
          <Avatar className="icon" src={shirtIcon} />
          <br />
          Tops
        </div>
        <div onClick={() => setCategory('arms')} className={ category && category === "arms" ? "selector-button active" : "selector-button" }>
          <Avatar className="icon" src={armsIcon} />
          <br />
          Arms
        </div>
        <div onClick={() => setCategory('neck')} className={ category && category === "neck" ? "selector-button active" : "selector-button" }>
          <Avatar className="icon" src={neckIcon} />
          <br />
          Neck
        </div>
        <div onClick={() => setCategory('bottoms')} className={ category && category === "bottoms" ? "selector-button active" : "selector-button" }>
          <Avatar className="icon" src={pantsIcon} />
          <br />
          Bottoms
        </div>
        <div onClick={() => setCategory('shoes')} className={ category && category === "shoes" ? "selector-button active" : "selector-button" }>
          <Avatar className="icon" src={shoesIcon} />
          <br />
          Shoes
        </div>
        <div onClick={() => setCategory('legs')} className={ category && category === "legs" ? "selector-button active" : "selector-button" }>
          <Avatar className="icon" src={legsIcon} />
          <br />
          Legs
        </div>
        <div onClick={() => setCategory('accessories')} className={ category && category === "accessories" ? "selector-button active" : "selector-button" }>
          <Avatar className="icon" src={accessoriesIcon} /> 
          <br />
          Accessories
        </div>
      </Stack>
    </div>
  );
}
