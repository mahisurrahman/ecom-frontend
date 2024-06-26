

const UserImageProf = ({user}) => {
    return (
        <div className="bg-white pt-5 px-5">
           <img src={`http://192.168.1.102:8000/images/${user.userImg}`} className="w-40 h-40" alt="" /> 
        </div>
    );
};

export default UserImageProf;