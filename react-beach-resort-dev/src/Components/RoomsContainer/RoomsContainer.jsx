import React from "react";

// import context
import { withRoomConsumer } from "../../Context/Context";

// import components
import Loadings from "../Loading/Loading";
import RoomFilter from "./RoomsFilter";
import RoomList from "./RoomsList";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loadings />;
  }

  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from "react";

// // import context
// import { RoomConsumer } from "../../Context/Context";

// // import components
// import Loadings from "../Loading/Loading";
// import RoomFilter from "./RoomsFilter";
// import RoomList from "./RoomsList";

// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;

//         if (loading) {
//           return <Loadings />;
//         }

//         return (
//           <div>
//             Hello From Rooms Container
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
