import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from '@inertiajs/react';
  
export default function Dashboard(props) {
    const { comments, flash } = usePage().props
  
    function destroy(e) {
        if (confirm("Are you sure you want to delete this?")) {
            Inertia.delete(route("posts.destroy", e.currentTarget.id));
        }
    }
   
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">comments</h2>}
        >
            <Head title="comments" />
  
            <div className="py-12">
            
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                                
                                {flash.message && (
                                    <div className="px-6 py-2  text-white bg-green-600">
                                        <div className="alert">{flash.message}</div>
                                    </div>
                                )}
                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 w-10">No.</th>
                                        <th className="px-4 py-2">Post Title</th>
                                        <th className="px-4 py-2">Comment</th>
                                        <th className="px-4 py-2">Comment By</th>
                                        <th className="px-4 py-2">Comment Time</th>
                                        <th className="px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comments.map(({ id, postTitle,createdBy,avatar,comment,created_at }) => (
                                        <tr key={id}>
                                            <td className="border px-4 py-2">{ id }</td>
                                            <td className="border px-4 py-2">{ postTitle }</td>
                                            <td className="border px-4 py-2">{ comment }</td>
                                            <td className="border px-4 py-2">
                                                <p>{ createdBy }</p>
                                                <img src={avatar ? avatar : 'https://via.placeholder.com/150'} alt={postTitle} className="w-20 h-20" />
                                            </td>
                                            <td className="border px-4 py-2">{ created_at }</td>
                                            <td className="border px-4 py-2">
                                                <Link
                                                    tabIndex="1"
                                                    className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                    href={route("comment.reply", id)}
                                                >
                                                    Reply
                                                </Link>
                                                <button
                                                    onClick={destroy}
                                                    id={id}
                                                    tabIndex="-1"
                                                    type="button"
                                                    className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
  
                                    {comments.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No contacts found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}