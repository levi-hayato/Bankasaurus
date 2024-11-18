import TotalBallanceBox from '@/components/ui/TotalBallanceBox';
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/ui/RightSidebar';

const Home = () => {

const loggedIN = {firstName : "Rushiraj" , lastName : "Sonawane" , email : "rushirajsonawane1414@gmail.com"};

  return (
   <section className='home'>
    <div className='home-content'>
      <header className='home-header'>
      <HeaderBox
       type="greeting"
       title="Welcome"
       user={loggedIN?.firstName || "Guest"}
       subtext="Access & Manage your account and transactions effectively with Bankasaurus Inadia's no. banking site."
      />

      <TotalBallanceBox
      accounts={[]}
      totalBanks={1}
      totalCurrentBalance={1250.35}
      />
      </header>
      RECENT TRANSACTIONS
    </div>
  
        <RightSidebar
        user={loggedIN}
        transactions={[]}
        banks={[{currentBalance:1230.40} , {currentBalance:45000}]}
        />

   </section>
  )
}

export default Home
