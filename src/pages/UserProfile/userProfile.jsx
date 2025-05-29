import React from 'react';
import UserSidebar from '../../components/userSidebar/userSidebar';
import Header from '../../components/header/header';
import UserInfo from '../../components/userInfo/userinfo';


const UserProfile = () => {
    return (
        <>
        
         <main className="flex flex-row min-h-screen">
                {/* Sidebar - fixed width */}
                <aside className=" border-gray-200 bg-[#f4eae4]  mr-12">
                    <UserSidebar/>
                </aside>
                <div className="d">
                    <UserInfo/>
                </div>

            </main>
        </>
    );
};

export default UserProfile;