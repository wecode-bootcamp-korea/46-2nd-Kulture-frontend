import styled from 'styled-components';
import { Mixin } from '../../styles/mixin';

export const S = {
  EventList: styled.div`
    width: 1324px;
    margin: 0 auto;
  `,

  Container: styled.div`
    display: flex;
    width: 1324px;
    margin: 0 auto;
    margin-top: 140px;
  `,

  ContainerLeft: styled.div`
    position: sticky;
    top: 90px;
    width: 400px;
    height: 900px;
    margin-right: 64px;
    margin-top: 60px;
  `,

  TokenBox: styled.div`
    ${Mixin.flexCenter}
    width: 400px;
    height: 70px;
    background-color: #494949;
  `,

  TokenQuantity: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  `,

  ContainerRight: styled.div``,
  Titlesymbol: styled.img`
    float: right;
    width: 40px;
    height: 40px;
  `,

  TitleBox: styled.div`
    width: 860px;
  `,

  Title: styled.h1`
    float: right;
    font-size: 27px;
    font-weight: 700;
    line-height: 36px;
    margin-top: 10px;
    margin-bottom: 22px;
    color: ${props => props.theme.kultureGreen};
  `,

  TitleLine: styled.div`
    width: 860px;
    height: 1px;
    background-color: #d9d9d9;
    margin-top: 60px;
    margin-bottom: 20px;
  `,

  FilterBox: styled.div`
    width: 860px;
    height: 26px;
    margin-bottom: 34px;
  `,

  FilterContent: styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
  `,
  Filter: styled.div``,

  WrapperCard: styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 855px;
  `,

  More: styled.div`
    margin: 0 auto;
    position: relative;
    width: 1324px;
    height: 40px;
    margin-top: 80px;
  `,

  MoreLine: styled.div`
    position: absolute;
    top: 15px;
    width: 860px;
    height: 1px;
    background-color: ${props => props.theme.kultureGreen};
  `,

  MoreText: styled.div`
    position: absolute;
    left: 430px;
    margin-left: -37px;
    ${Mixin.flexCenter}
    width: 74px;
    height: 30px;
    border: 1px solid ${props => props.theme.kultureGreen};
    border-radius: 10px;
    background-color: ${props => props.theme.kultureBackground};
    color: ${props => props.theme.kultureGreen};
    font-weight: 400;

    :hover {
      cursor: pointer;
    }
  `,
};
