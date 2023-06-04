import styled from '@emotion/styled';

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: grey;
  padding-top: 60px;
  padding-bottom: 60px;
`;
export const Description = styled.div`
  background-color: silver;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;
export const Avatar = styled.img`
  display: block;
  width: 150px;
  margin-top: 20px;
`;
export const Name = styled.p`
  font-size: 22px;
  color: black;
  margin-top: 20px;
`;
export const Text = styled.p`
  margin-top: 10px;
  font-size: 16px;
`;
export const Stats = styled.ul`
  background-color: aquamarine;
  width: 300px;
  display: flex;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  justify-content: center;
`;
export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-top: 1px solid black;
  :not(:last-child) {
    border-right: 1px solid black;
  }
  :not(:last-child) span {
    border-right: none;
  }
`;
export const SpanLabel = styled.span`
  display: flex;
  font-size: 16px;
  text-align: center;
  justify-content: center;
`;
export const SpanQuantity = styled.span`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin: 10px auto;
`;
