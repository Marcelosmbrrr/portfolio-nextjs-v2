"use client"

import * as React from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

export function LimitControl() {

    const [limit, setLimit] = React.useState<10 | 25 | 50>(10);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function changeLimit(limit: 10 | 25 | 50) {
        setLimit(limit);
        const params = new URLSearchParams(searchParams);
        params.set('limit', String(limit));
        replace(`${pathname}?${params.toString()}`);
    }

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Menu as="div" className="relative inline-block text-left">

            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Limit: {limit}
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <span
                                    onClick={() => changeLimit(10)}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    10
                                </span>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <span
                                    onClick={() => changeLimit(25)}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    25
                                </span>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <span
                                    onClick={() => changeLimit(50)}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    50
                                </span>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )


}