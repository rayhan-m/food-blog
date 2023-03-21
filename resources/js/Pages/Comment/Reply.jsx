import {React,useState,Fragment} from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link,usePage } from '@inertiajs/react';
  
export default function Dashboard(props) {
  const { comment } = usePage().props


    const { data, setData, errors, post } = useForm({
        comment_id: comment.id,
        reply: "",
    });

      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    function handleSubmit(e) {
        e.preventDefault();
        post(route("reply.store"));
    }
    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Reply Comment</h2>}
        >
            <Head title="Posts" />
  
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
  
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={ route("comment.list") }
                                >
                                    Back
                                </Link>
                            </div>
                            <h1> <span className='font-bold'>Post:</span>  {comment.postTitle}</h1>
                            <h1> <span className='font-bold'>Comment:</span>  {comment.comment}</h1>
  
                            <form name="createForm" onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="flex flex-col">
                                    <div className="mb-0">
                                        <label className="block font-medium text-gray-900">Reply</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="Reply"
                                            name="reply"
                                            errors={errors.reply}
                                            value={data.reply}
                                            onChange={(e) =>
                                                setData("reply", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.reply}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
  
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}