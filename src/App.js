import {ChatEngine} from 'react-chat-engine';

import './App.css';
const App=()=>{
	return(

			<ChatEngine
			height="100vh"
				projectID="1153e4f3-e3c2-4bc8-b99e-d3c33528e802"
				userName="Master"
				userSecret="masterid"
				renderChatFeed={(chatAppProps)=><ChatFeed/>}
			/>
		);
}

export default App;