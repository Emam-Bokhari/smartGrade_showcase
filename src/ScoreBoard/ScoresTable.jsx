import { Fragment } from "react"
import classOneScoresData from "../../public/classOneScoresData.json"
import classTwoScoresData from "../../public/classTwoScoresData.json"

const ScoresTable = () => {

    return (
        <Fragment>
            <div className="container" >
               
                <div className="max-w-[848px] mx-auto overflow-auto">
                <table className="w-full">
                <thead>
                    <tr className="border-b border-[#FFFFFF0D]">
                        <th
                            className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                            ID
                        </th>
                        <th
                            className="p-5 text-sm md:text-xl font-semibold text-left">
                            Name
                        </th>
                        <th
                            className="p-5 text-sm md:text-xl font-semibold">
                            Scores
                        </th>
                        <th
                            className="p-5 text-sm md:text-xl font-semibold">
                            Percentage
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* class one */}
                    <tr className="bg-white/5">
                        <td className="p-5 text-sm md:text-xl" colSpan="4">
                            Class One
                        </td>
                    </tr>

                    {classOneScoresData.map((student) => (
                        <tr key={student.id} className="border-b border-[#7ECEB529]">
                            <td className="p-5 text-sm md:text-xl">{student.id}</td>
                            <td className="p-5 text-sm md:text-xl">
                                <div className="flex space-x-3 items-center">
                                    <img
                                        className="w-8 h-8 rounded-full object-cover"
                                        src={student.image}
                                        width="32"
                                        height="32"
                                        alt="John Smith" />
                                    <span className="whitespace-nowrap">
                                        {student.name}
                                    </span>
                                </div>
                            </td>
                            <td className="p-5 text-sm md:text-xl text-center">
                                {student.scores}
                            </td>
                            <td className="p-5 text-sm md:text-xl text-center">
                                {student.percentage}
                            </td>
                        </tr>
                    ))}

                   {/* class two */}
                            <tr className="bg-white/5">
                                <td className="p-5 text-sm md:text-xl" colSpan="4">
                                    Class Two
                                </td>
                            </tr> 
                            {classTwoScoresData.map((student) => (
                        <tr key={student.id} className="border-b border-[#7ECEB529]">
                            <td className="p-5  text-sm md:text-xl">{student.id}</td>
                            <td className="p-5 text-sm md:text-xl">
                                <div className="flex space-x-3 items-center">
                                    <img
                                        className="w-8 h-8 rounded-full object-cover"
                                        src={student.image}
                                        width="32"
                                        height="32"
                                        alt="John Smith" />
                                    <span className="whitespace-nowrap">
                                        {student.name}
                                    </span>
                                </div>
                            </td>
                            <td className="p-5 text-sm md:text-xl text-center">
                                {student.scores}
                            </td>
                            <td className="p-5 text-sm md:text-xl text-center">
                                {student.percentage}
                            </td>
                        </tr>
                    ))} 

                </tbody>
            </table>
                </div>
            </div>
        </Fragment>
    )
}
export default ScoresTable