import PropTypes from 'prop-types';
import {
  DivContainer,
  StatSection,
  Title,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

import { generateRandomColor } from 'utils/utils';

const Statistics = ({ title, stats }) => {
  return (
    <DivContainer>
      <StatSection>
        {title && <Title>{title}</Title>}
        <StatList>
          {stats.map(stat => {
            return (
              <StatItem
                key={stat.id}
                style={{ backgroundColor: generateRandomColor() }}
              >
                <StatLabel>{stat.label} </StatLabel>
                <StatPercentage>{stat.percentage}%</StatPercentage>
              </StatItem>
            );
          })}
        </StatList>
      </StatSection>
    </DivContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
