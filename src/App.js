import './App.css';

import profile from "./components/User/profile.json"
import User from "./components/User/User"

import data from "./components/Data/data.json"
import Data from "./components/Data/Data"

import friends from "./components/Friends/friends.json"
import FriendsList from './components/Friends/FriendsList';

import transactions from "./components/Transactions/transactions.json"
import TransactionHistory from "./components/Transactions/TransactionHistory"

import {Container} from "./App.styled"

function App() {
  return (
    <Container>
    <div>
    <User
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        followers={profile.stats.followers}
        views={profile.stats.views}
        likes={profile.stats.likes} />

      <Data title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
      </Container>
  );
}

export default App;
