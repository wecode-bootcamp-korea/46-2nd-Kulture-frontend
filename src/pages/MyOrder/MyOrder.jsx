import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import My from '../../components/My/My.jsx';
import { APIS } from '../../config.js';
import { M } from '../../components/My/My';
import { S } from './MyOrder';
import TicketModal from '../../components/TicketModal/TicketModal.jsx';
import ReviewModal from '../../components/ReviewModal/ReviewModal.jsx';

const MyOrder = () => {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [forReviewId, setForReviewId] = useState('');
  const [forReviewName, setForReviewName] = useState('');
  const [orderList, setOrderList] = useState([]);

  const navigate = useNavigate();

  const handleTicketModal = () => {
    setIsTicketModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleReviewModal = (event_id, name) => {
    setIsReviewModalOpen(true);
    setForReviewId(event_id);
    setForReviewName(name);
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    fetch(`${APIS.order}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setOrderList(data);
      });
  }, []);

  //orderList Mock Data
  // useEffect(() => {
  //   fetch('data/orderList.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setOrderList(data);
  //     });
  // }, []);

  return (
    <>
      <M.Title>내 이벤트</M.Title>

      <M.Container>
        <My />

        <M.MainContainer>
          <M.SectionWrapper>
            <M.SectionTitleWrapper>
              <M.Text size="22px" weight="600">
                내 티켓
              </M.Text>
            </M.SectionTitleWrapper>
            <S.TicketBoxWrapper>
              {orderList.length === 0 ? (
                <M.EmptyBox>유효한 티켓이 없어요!</M.EmptyBox>
              ) : (
                orderList.map(
                  ({
                    id,
                    event_id,
                    name,
                    image_url,
                    location,
                    event_start_date,
                  }) => {
                    if (new Date(event_start_date) < new Date()) {
                      return null;
                    } else
                      return (
                        <S.TicketBox key={id}>
                          <S.TicketImage
                            onClick={() => navigate(`/event/${event_id}`)}
                            src={image_url}
                          />
                          <S.TicketInfo>
                            <S.EventName
                              onClick={() => navigate(`/event/${event_id}`)}
                              size="22px"
                              weight="500"
                            >
                              {name}
                            </S.EventName>
                            <M.Text size="16px" weight="400">
                              {event_start_date} ・ {location}
                            </M.Text>
                          </S.TicketInfo>
                          <M.CTABtn onClick={handleTicketModal}>
                            티켓 확인하기
                          </M.CTABtn>
                          {isTicketModalOpen ? (
                            <TicketModal
                              setIsTicketModalOpen={setIsTicketModalOpen}
                            />
                          ) : null}
                        </S.TicketBox>
                      );
                  }
                )
              )}
            </S.TicketBoxWrapper>
          </M.SectionWrapper>
          <M.SectionWrapper>
            <M.SectionTitleWrapper>
              <M.Text size="22px" weight="600">
                지난 이벤트
              </M.Text>
            </M.SectionTitleWrapper>
            <S.TicketBoxWrapper>
              {orderList.length === 0 ? (
                <M.EmptyBox>지난 이벤트가 없어요!</M.EmptyBox>
              ) : (
                orderList.map(
                  ({
                    id,
                    name,
                    image_url,
                    location,
                    event_start_date,
                    event_id,
                  }) => {
                    if (new Date(event_start_date) > new Date()) {
                      return null;
                    } else
                      return (
                        <S.TicketBox key={id}>
                          <S.TicketImage
                            onClick={() => navigate(`/event/${event_id}`)}
                            src={image_url}
                          />
                          <S.TicketInfo>
                            <S.EventName
                              onClick={() => navigate(`/event/${event_id}`)}
                              size="22px"
                              weight="500"
                            >
                              {name}
                            </S.EventName>
                            <M.Text size="16px" weight="400">
                              {event_start_date} ・ {location}
                            </M.Text>
                          </S.TicketInfo>
                          <M.CTABtnSecondary
                            onClick={() => handleReviewModal(event_id, name)}
                          >
                            리뷰 남기기
                          </M.CTABtnSecondary>
                          {isReviewModalOpen ? (
                            <ReviewModal
                              setIsReviewModalOpen={setIsReviewModalOpen}
                              eventId={forReviewId}
                              name={forReviewName}
                            />
                          ) : null}
                        </S.TicketBox>
                      );
                  }
                )
              )}
            </S.TicketBoxWrapper>
          </M.SectionWrapper>
        </M.MainContainer>
      </M.Container>
    </>
  );
};

export default MyOrder;
