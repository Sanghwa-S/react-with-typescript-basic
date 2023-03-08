import { useState, useRef, useEffect} from 'react';

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const users = [
        {name: 'Sarah', age: 21},
        {name: 'John', age: 22},
        {name: 'Thomas', age: 23},
    ];

    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>();
    
    useEffect(() =>{
        if(!inputRef.current){
            return;
        }
        inputRef.current.focus()
    }, []);

    const onClick =() => {
        const findUser = users.find((user) => {
            return user.name === name;
        });
        setUser(findUser);
    };

    return (
        <div>
            UserSearch
            <input ref={inputRef} onChange={event => setName(event.target.value) }/>
            <button onClick={onClick} >Find User</button>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    );
        

};

export default UserSearch;