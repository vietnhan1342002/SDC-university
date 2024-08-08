import HeaderAboutUs from "./components/HeaderAboutUs";

const img = 'images/organiztionalStructure.jpg'

// const boards = [
//     {
//         name: 'Thông',
//         position: 'Hiệu trưởng',
//         image: 'images/thong.jpg',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis velit sed neque euismod, ac tempor nisi sagittis.'
//     },
//     {
//         name: 'Nhân',
//         position: 'Phó Giảng viên',
//         image: 'images/nhan.jpg',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis velit sed neque euismod, ac tempor nisi sagittis.'
//     },
//     {
//         name: 'Thịnh',
//         position: 'Phó Giảng viên',
//         image: 'images/thinh.jpg',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis velit sed neque euismod, ac tempor nisi sagittis.'
//     }
// ]

const Board = () => {
    return (
        <div className="flex flex-col m-5 px-52">
            <HeaderAboutUs title='HỘI ĐỒNG QUẢN TRỊ' />
            <img src={img} />
            <p className="text-4xl text-center p-10 bg-blue-400">
                HỘI ĐỒNG QUẢN TRỊ BAN GIÁM HIỆU NHÀ TRƯỜNG
            </p>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {
                    boards.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                            <img src={item.image} alt={item.name} className="w-32 h-32 rounded-full object-cover mb-4" />
                            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                            <h3 className="text-lg text-gray-600 mb-2">{item.position}</h3>
                            <p className="text-gray-600 text-center">{item.description}</p>
                        </div>
                    ))
                }
            </div> */}
        </div>

    )
}

export default Board;