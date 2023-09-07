"use client"
import Link from 'next/link'
import Total from './total'

const beliTiket = () => {


    const festivalA = {
        type: 'Festival A (Standing)',
        price: 25000
    }

    const festivalB = {
        type: 'Festival B (Standing)',
        price: 15000
    }

    const bronzeA = {
        type: 'Bronze A (seating)',
        price: 35000
    }

    const bronzeB = {
        type: 'Bronze B (seating)',
        price: 35000
    }

    const silverA = {
        type: 'Silver A (seating)',
        price: 50000,
        seat: {
            'SAG': [1, 2, 3, 4, 5, 6, 7, 8],
            'SAF': [1, 2, 3, 4, 5, 6, 7, 8],
            'SAE': [1, 2, 3, 4, 5, 6, 7, 8],
            'SAD': [1, 2, 3, 4, 5, 6, 7, 8],
            'SAC': [1, 2, 3, 4, 5, 6, 7, 8],
            'SAB': [1, 2, 3, 4, 5, 6, 7, 8],
            'SAA': [1, 2, 3, 4, 5, 6, 7, 8],
        }

    }

    const silverB = {
        type: 'Silver B (seating)',
        price: 50000,
        seat: {
            col: 20,
            row: 10,
        }
    }

    const gold = {
        type: 'Gold (seating)',
        price: 75000,
        seat: {
            col: 20,
            row: 10,
        }
    }


    return (
        <div className="container">
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 p-5">
                    <table>
                        <tbody>
                            <tr>
                                <td className='text-center p-10 h-12'>L2</td>
                                <td className='text-center p-10 h-12'>L1</td>
                                <td className='text-center p-10 bg-black text-white h-48' rowSpan={2}>Stage</td>
                                <td className='text-center p-10 h-12'>L1</td>
                                <td className='text-center p-10 h-12'>L2</td>
                            </tr>
                            <tr>
                                <td className='text-center p-10 bg-[silver] h-12' rowSpan={3}>
                                    <div>S</div>
                                    <div>I</div>
                                    <div>L</div>
                                    <div>V</div>
                                    <div>E</div>
                                    <div>R</div>
                                </td>
                                <td className='text-center p-10 bg-[brown]/60 h-12' rowSpan={3}>
                                    <div>B</div>
                                    <div>R</div>
                                    <div>O</div>
                                    <div>N</div>
                                    <div>Z</div>
                                    <div>E</div>
                                </td>
                                <td className='text-center p-10 bg-[brown]/60 h-12' rowSpan={3}>
                                    <div>B</div>
                                    <div>R</div>
                                    <div>O</div>
                                    <div>N</div>
                                    <div>Z</div>
                                    <div>E</div>
                                </td>
                                <td className='text-center p-10 bg-[silver] h-12' rowSpan={3}>
                                    <Link href='/beli-tiket/silver'>
                                        <div>S</div>
                                        <div>I</div>
                                        <div>L</div>
                                        <div>V</div>
                                        <div>E</div>
                                        <div>R</div>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <Link href='/beli-tiket/festival'>
                                    <td className={`flex p-10 text-center bg-[green]`}>
                                        Festival A
                                    </td>
                                </Link>
                            </tr>
                            <tr>
                                <Link href='/beli-tiket/festival'>
                                    <td className={`flex p-10 text-center bg-[yellow]`}>
                                        Festival B
                                    </td>
                                </Link>
                            </tr>
                            <tr>
                                <td className='text-center p-10 h-12'></td>
                                <td className='text-center p-10 bg-[gold] h-12' colSpan={3} rowSpan={1}>
                                    <Link href='/beli-tiket/gold'>
                                        Gold
                                    </Link>
                                </td>
                                <td className='text-center p-10 h-12'></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full md:w-1/2 p-5">
                    <Total />
                </div>
            </div>

        </div>
    )
}

export default beliTiket
