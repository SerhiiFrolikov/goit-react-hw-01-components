import PropTypes from 'prop-types';
import { DivContainer, StatSection, Title, StatList, StatItem, StatLabel, StatPercentage } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  const generateRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  };

  return (
    <DivContainer>
    <StatSection>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => {
          return (
            <StatItem key={stat.id} style={{ backgroundColor: generateRandomColor() }}>
              <StatLabel>{stat.label} </StatLabel>
              <StatPercentage>{stat.percentage}%</StatPercentage>
            </StatItem>
          );
        })
      }  
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
  )
};

export default Statistics;
