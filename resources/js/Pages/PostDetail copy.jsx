import GuestLayout from '@/Layouts/GuestLayout';
import { usePage,useForm } from '@inertiajs/react';

export default function Example(props) {
    const {postDetail,comments } = usePage().props.data;
    const { flash } = usePage().props


    const { data, setData, errors ,post} = useForm({
        comment: "",
        post_id:postDetail.id,
    });
    function handleSubmit(e) {
        e.preventDefault();
        post(route("comment.store"));

        setData({
            comment: ""
        });
    }

    return (
        <GuestLayout>

            <div className="bg-white">
                <div className="pt-6">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <li>
                                <div className="flex items-center">
                                    <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                                        {postDetail.category}
                                    </a>
                                    <svg
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                            <li className="text-sm">
                                <a href={postDetail.id} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                    {postDetail.title}
                                </a>
                            </li>
                        </ol>
                    </nav>

                    {flash.message && (
                    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8">
                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pt-6 lg:pr-8">
                            <div className="px-6 py-2  text-white bg-green-600">
                                <div className="alert">{flash.message}</div>
                            </div>
                        </div>
                    </div>
                    )}
                    {/* Image gallery */}
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-4xl">
                        <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                            <img
                                src={postDetail.image}
                                alt={postDetail.title}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>

                    </div>

                    {/* post info */}
                    <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                        <div className="lg:col-span-2 lg:pr-8">
                            <p className="mt-2 text-sm text-gray-500">{postDetail.category}</p>
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{postDetail.title}</h1>
                            <p className="mt-2 text-sm text-gray-500">{postDetail.created_at}</p>

                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pt-6 lg:pb-16 lg:pr-8">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{postDetail.description}</p>
                                </div>
                            </div>

                            

                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="sm:block hidden">
                                    <div className="flex bg-white p-6 rounded-md">
                                        <textarea name="comment" value={data.comment} onChange={(e) =>  setData("comment", e.target.value)
                                            } className="border-[1px] h-24 rounded-md resize-none w-full px-4 py-2 mr-4" placeholder="Add a comment..."></textarea>
                                        <button type="submit" className="bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">SEND</button>
                                    </div>
                                </div>
                            </form>



                            {comments.map((comment) => (
                                <div key={comment.id}>

                                    <div className="card bg-gray-100 flex mb-4 sm:p-6 p-2 rounded-md sm:flex-row flex-col-reverse self-center w-full">
                                        <div className="flex flex-col ml-4 w-full">
                                            <div className="flex flex-row mb-4 items-center flex-wrap">
                                                <img className="w-10 h-10 rounded-full mr-4" src={comment.avatar} alt={comment.createdBy} />
                                                <h1 className="h-fit mr-4">{comment.createdBy}</h1>
                                                <div className="h-fit min-h-fit opacity-60 flex-1">{comment.created_at}</div>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="opacity-70">{comment.comment}</div>
                                            </div>
                                        </div>
                                    </div>
                                    {comment.replies.map((reply) => (

                                        <div key={reply.id} className=" border-l-2 sm:pl-10 sm:ml-10 ml-0 mb-4 pl-5">
                                            <div className="card bg-gray-100 flex mb-4 sm:p-6 p-2 rounded-md sm:flex-row flex-col-reverse self-center w-full">
                                                <div className="flex flex-col ml-4 w-full">
                                                    <div className="flex flex-row mb-4 items-center flex-wrap">
                                                        <img className="w-10 h-10 rounded-full mr-4" src={reply.avatar} alt={reply.createdBy} />
                                                        <h1 className="h-fit mr-4">{reply.createdBy}</h1>
                                                        <div className="h-fit min-h-fit opacity-60 flex-1">{reply.created_at}</div>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <div className="opacity-70">
                                                            {reply.reply}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            ))}


                        </div>
                    </div>
                </div>

            </div>
        </GuestLayout>

    )
}
