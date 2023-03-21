<?php

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PostController;
use App\Http\Controllers\BackendController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CategoryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// post details 
Route::get('/', [PostController::class, 'landing'])->name('landing');
Route::get('/post/{post}', [PostController::class, 'PostDetail'])->name('PostDetail');
Route::get('/dashboard', [BackendController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');
Route::post('comment-store', [CommentController::class, 'commentStore'])->name('comment.store');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::prefix('admin')->group(function() {
    Route::resource('categories', CategoryController::class)->middleware(['auth', 'verified']);
    Route::resource('posts', PostController::class)->middleware(['auth', 'verified']);

Route::get('comment-list', [CommentController::class, 'commentList'])->name('comment.list');
Route::get('comment-reply/{id}', [CommentController::class, 'commentReply'])->name('comment.reply');
Route::post('reply-store', [CommentController::class, 'replyStore'])->name('reply.store');


});


require __DIR__.'/auth.php';
