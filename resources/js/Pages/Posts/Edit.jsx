import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage, Link } from '@inertiajs/react';
  
export default function Dashboard(props) {
  
    const { post,categories } = usePage().props;
    const { data, setData, put, errors } = useForm({
        title: post.title || "",
        category_id: post.category_id || "",
        image: post.image || "",
        description: post.description || "",
        active_status: post.active_status || "",
    });

    const statuses = [
        {
          id: 1,
          name: 'Active',
          },
        {
          id: 0,
          name: 'Inactive',
          },
      ]
  
    function handleSubmit(e) {
        e.preventDefault();
        put(route("posts.update", post.id));
    }
  
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Post</h2>}
        >
            <Head title="Posts" />
  
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
  
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={ route("posts.index") }
                                >
                                    Back
                                </Link>
                            </div>
  
                            <form name="createForm" onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="block font-medium text-gray-900">Title</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Title"
                                            name="title"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.title}
                                        </span>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                        Category
                                        </label>
                                        <select onChange={(e) =>
                                                    setData("category_id", e.target.value)
                                                }
                                            id="category_id"
                                            name="category_id"
                                            autoComplete="country-name"
                                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        >
                                            <option value="">Select Category</option>
                                            {categories.map((category) => (
                                                <option key={category.id} value={category.id}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>




                                    <div className="mb-4 mt-4">
                                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                            Image
                                        </label>
                                        <input
                                            type="file"
                                            className="w-full py-2"
                                            label="image"
                                            name="image"
                                            onChange={(e) =>
                                                setData("image", e.target.files[0])
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.image}
                                        </span>
                                    </div>



                                    <div className="mb-4">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                            Status
                                        </label>
                                        <select onChange={(e) =>
                                                    setData("active_status", e.target.value)
                                                }
                                            id="active_status"
                                            name="active_status"
                                            autoComplete="country-name"
                                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        >
                                            <option value="">Select Status</option>
                                            <option value="1">Active</option>
                                            <option value="0">Inactive</option>
                                        </select>
                                    </div>
                                    
                                    <div className="mb-0">
                                        <label className="block font-medium text-gray-900">Description</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="Description"
                                            name="description"
                                            errors={errors.description}
                                            value={data.description}
                                            onChange={(e) =>
                                                setData("description", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.description}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Save
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