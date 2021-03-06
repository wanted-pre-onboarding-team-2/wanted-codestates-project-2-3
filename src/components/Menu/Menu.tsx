import React, { MutableRefObject, useState } from "react";
import { BiMenu } from "react-icons/bi";

import * as S from "./style";
import { useToggleBtns } from "./menuFunc/useToggleBtns";
import {
  TitleInput,
  ToggleTitle,
  ToggleSearch,
  ToggleMultiSelect,
  ToggleSelectedItem,
  SetItemSize,
  SetBoxSize,
} from "./MenuComponents";
import { Props } from "./types";
import { useClickAway } from "./menuFunc/useClickAway";

function Menu({ settingState, dispatch }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const [
    handleToggleShowTitle,
    handleToggleShowSearch,
    handleToggleMultiSelect,
    handleToggleShowSelectedItem,
    handleChangeAvailableTitle,
    handleChangeSelectedTitle,
    handleUlClick,
    handleChangeWidth,
    handleChangeHeight,
  ] = useToggleBtns(settingState, dispatch);

  const awayEvent = () => {
    menuOpen && setMenuOpen(false);
  };
  const ref = useClickAway(awayEvent, [menuOpen]);

  return (
    <>
      <S.MenuButton onClick={handleToggleMenu}>
        <BiMenu />
      </S.MenuButton>
      {menuOpen && (
        <S.MenuContainer ref={ref as MutableRefObject<HTMLDivElement>}>
          <ToggleTitle settingState={settingState} handleToggleShowTitle={handleToggleShowTitle} />
          <TitleInput
            settingState={settingState}
            handleChangeAvailableTitle={handleChangeAvailableTitle}
            handleChangeSelectedTitle={handleChangeSelectedTitle}
          />
          <ToggleSearch
            settingState={settingState}
            handleToggleShowSearch={handleToggleShowSearch}
          />
          <ToggleMultiSelect
            settingState={settingState}
            handleToggleMultiSelect={handleToggleMultiSelect}
          />
          <ToggleSelectedItem
            settingState={settingState}
            handleToggleShowSelectedItem={handleToggleShowSelectedItem}
          />
          <SetItemSize settingState={settingState} handleUlClick={handleUlClick} />
          <SetBoxSize
            settingState={settingState}
            handleChangeWidth={handleChangeWidth}
            handleChangeHeight={handleChangeHeight}
          />
        </S.MenuContainer>
      )}
    </>
  );
}

export default Menu;
