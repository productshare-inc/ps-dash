import React from 'react'
import SettingsHeading from '../../../molecules/custom/v1/SettingsHeading'
import { ConnectionCardProps } from '@repo/ts-types/home/v1'
import ConnectionCard from '../../../molecules/custom/v1/ConnectionCard'

const MyConnectionsSettings = ({connections}:{connections:ConnectionCardProps[] | undefined}) => {
    const title = 'My Connections'
    const description = 'All your Third Party Connections in one place'
  return (
    <SettingsHeading title={title} description={description}>
        <div className='flex items-center justify-between'>
            <div className='text-description'>Connection</div>
            <div className='text-description'>Actions</div>
        </div>

        <div className='text-emphasis mt-4'>
            Discover New Connections
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-4 pb-20'>
            {connections?.map((connection, index) => (
                <div key={index} >
                    <ConnectionCard connection={connection}/>
                </div>
            ))}
        </div>

    </SettingsHeading>
  )
}

export default MyConnectionsSettings