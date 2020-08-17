import React, { useContext } from 'react';
import Link from 'next/link';
import { SbContainer,
         SbLink,
         SbItemSpan,
         Close,
         NavLang } from './styles';
import { Person,
         ChatDots,
         Diagram3,
         PencilSquare,
         InfoCircle } from 'react-bootstrap-icons';
import { SideBarContext, SideBarDispatch } from '../context/sideBar.context';


const SideBar = () => {
  const navState = useContext(SideBarContext);
  const toggle = useContext(SideBarDispatch);

  return (
    <SbContainer className={`${navState ? 'active' : ''}`}>
      <Close onClick={() => toggle(!navState)}>&times;</Close>
      <Link href="/">
        <SbLink>
          <Person size={22} />
          <SbItemSpan>Профиль</SbItemSpan>
        </SbLink>
      </Link>
      <Link href="/">
        <SbLink>
          <ChatDots size={22} />
          <SbItemSpan>Сообщения</SbItemSpan>
        </SbLink>
      </Link>
      <Link href="/">
        <SbLink>
          <Diagram3 size={22} />
          <SbItemSpan>Категории</SbItemSpan>
        </SbLink>
      </Link>
      <Link href="/">
        <SbLink>
          <PencilSquare size={22} />
          <SbItemSpan>Правила и<br />Условия</SbItemSpan>
        </SbLink>
      </Link>
      <Link href="/">
        <SbLink>
          <InfoCircle size={22} />
          <SbItemSpan>О нас</SbItemSpan>
        </SbLink>
      </Link>
      <NavLang>
        <span className="optLang">Мова</span> 
        <div>&#124;</div> 
        <span>Язык</span>
      </NavLang>
    </SbContainer>
)};

export default SideBar;