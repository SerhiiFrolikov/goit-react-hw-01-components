import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendlist/FriendList';
import TransactionHistory from './transactions/TransactionsHistory';

const App = () => {
  return (
    <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />;
    </div>
  );
};

export default App;
