import React from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react'

const Header = ({ DownloadIcon }) => {
    return (
        <div className='p-4 sm:ms-10 shadow-lg flex justify-between items-center w-full'>
            <div className='flex items-center gap-2'>
                <img
                    src='Logoblend Logo.png'
                    height={45}
                    width={45}
                />
                <h1 className='font-bold text-2xl'>LogoBlend</h1>
            </div>
            <Button onClick={() => DownloadIcon(Date.now())}><Download />&nbsp;Download</Button>
        </div>
    )
}

export default Header