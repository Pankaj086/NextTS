
export default function UserProfile({params}: any) {
    return(
        <div>
            <h1>User Profile</h1>
            <h1>Hello User your UserId is: {params.id}</h1>
        </div>
    )
}