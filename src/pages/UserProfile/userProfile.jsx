import React from 'react';
import UserSidebar from '../../components/userSidebar/userSidebar';
import Header from '../../components/header/header';


const UserProfile = () => {
    return (
        <>
        
         <main className="flex flex-row min-h-screen">
                {/* Sidebar - fixed width */}
                <aside className=" border-gray-200 bg-[#f4eae4]  mr-12">
                    <UserSidebar/>
                </aside>
                <div className="d">
                    aslf
                </div>

            </main>
        </>
    );
};

export default UserProfile;