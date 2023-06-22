import styled from 'styled-components';
import { MdAlarmOn, MdCheckCircleOutline, MdBlock } from 'react-icons/md';
import { Mixin } from '../../styles/mixin';

export const S = {
  EmptyBox: styled.div`
    ${Mixin.flexCenter};
    padding: 30px;
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.theme.lightGrey};
    border-radius: 10px;
    background-color: ${props => props.theme.darkGrey};
  `,

  TextUnit: styled.div`
    display: flex;
    align-items: baseline;
    gap: 5px;
  `,

  AuctionBoxWrapper: styled.div`
    ${Mixin.flexCenter};
    gap: 18px;
    width: 930px;
    background-color: ${props => props.theme.darkGrey};
    border-radius: 10px;
  `,

  AuctionBoxIP: styled.div`
    ${Mixin.flexCenter};
    flex-direction: column;
    gap: 15px;
    width: 290px;
    height: 180px;
  `,

  AuctionBoxDone: styled.div`
    ${Mixin.flexCenter};
    flex-direction: column;
    gap: 15px;
    width: 290px;
    height: 180px;
    margin: 10px 0;
    border: 3px solid ${props => props.theme.kultureGreen};
    border-radius: 10px;
    color: ${props => props.theme.kultureGreen};
  `,

  AuctionBoxFail: styled.div`
    ${Mixin.flexCenter}
    flex-direction: column;
    gap: 15px;
    width: 290px;
    height: 180px;
  `,

  StatusBox: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
  `,

  AuctionIP: styled(MdAlarmOn)`
    font-size: 25px;
    color: ${props => props.theme.white};
  `,

  AuctionDone: styled(MdCheckCircleOutline)`
    font-size: 25px;
    color: ${props => props.theme.kultureGreen};
  `,

  AuctionFail: styled(MdBlock)`
    font-size: 25px;
    color: ${props => props.theme.lightGrey};
  `,

  SuccessBoxWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 930px;
  `,

  SuccessBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 10px 30px;
    background-color: ${props => props.theme.darkGrey};
  `,

  TokenDonationWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    width: 930px;
  `,

  TokenBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 25px;
    width: 450px;
    height: 200px;
    padding-left: 60px;
    border-radius: 10px;
    border: 3px solid ${props => props.theme.kultureGreen};
  `,

  TokenUnit: styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.gap};
    width: ${props => props.width};
  `,

  DonationBox: styled.div`
    ${Mixin.flexCenter}
    gap: 10px;
    width: 450px;
    height: 200px;
    padding: 0 70px;
    border-radius: 10px;
    background-color: ${props => props.theme.darkGrey};
  `,

  TicketBoxWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 930px;
  `,

  TicketBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 20px 30px;
    background-color: ${props => props.theme.darkGrey};
  `,

  TicketImage: styled.div`
    width: 230px;
    aspect-ratio: 16/9;
    border-radius: 10px;
    background-image: url(${props => props.src});
    background-size: 100%;
  `,

  TicketInfo: styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 420px;
  `,
};
