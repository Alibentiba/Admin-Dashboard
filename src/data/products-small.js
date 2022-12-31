export const userColumns = [
    { field: "id", headerName: "ID", width: 170 },
    {
      field: "user",
      headerName: "User",
      width: 260,
      
      renderCell: (params) => {
        return (
          <div className="flex items-center justify-center gap-3 ">
            <img src={params.row.img} alt="avatar" className=' w-[40px]  h-[40px] rounded-full object-cover' />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`px-4 py-2 rounded-sm font-medium
           ${params.row.status==="active"&&" text-green-700 bg-green-200"}
          ${params.row.status==="passive"&&" text-red-600 bg-red-200"}
          ${params.row.status==="pending"&&" text-orange-600 bg-orange-200"}
          
          
          `}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://fr.web.img4.acsta.net/pictures/17/01/24/15/19/303818.jpg",
      status: "active",
      email: "1snow@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://fr.web.img4.acsta.net/pictures/17/01/24/15/19/303818.jpg",
      email: "2snow@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://fr.web.img4.acsta.net/pictures/17/01/24/15/19/303818.jpg",
      email: "3snow@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Stark",
      img: "https://fr.web.img4.acsta.net/pictures/17/01/24/15/19/303818.jpg",
      email: "4snow@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://fr.web.img4.acsta.net/pictures/17/01/24/15/19/303818.jpg",
      email: "5snow@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://fr.web.img4.acsta.net/pictures/17/01/24/15/19/303818.jpg",
      email: "6snow@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://fr.web.img4.acsta.net/pictures/17/01/24/15/19/303818.jpg",
      email: "7snow@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Frances",
      img: "https://fr.web.img4.acsta.net/pictures/17/01/24/15/19/303818.jpg",
      email: "8snow@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://fr.web.img4.acsta.net/pictures/17/01/24/15/19/303818.jpg",
      email: "snow@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://fr.web.img4.acsta.net/pictures/17/01/24/15/19/303818.jpg",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
  ];