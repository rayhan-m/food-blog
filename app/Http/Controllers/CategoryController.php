<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        return Inertia::render('Category/Index', [
            'categories' => Category::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Category/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $cat = new Category();
        $cat->name = $request->name;
        $cat->slug = Str::slug($request->name);
        $cat->save();

        return redirect()->route('categories.index')->with('message', 'Category Added successfully!');
    }

    public function edit(Category $category)
    {
        return Inertia::render('Category/Edit', [
            'category' => [
                'id' => $category->id,
                'name' => $category->name,
            ],
        ]);
    }

    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => 'required',
        ]);

        // $category->update($request->all());
        $cat = Category::find($category->id);
        $cat->name = $request->name;
        $cat->slug = Str::slug($request->name);
        $cat->save();

        return redirect()->route('categories.index')->with('message', 'Category Updated successfully!');
    }

    public function destroy(Category $category)
    {
        $category->delete();

        return redirect()->route('categories.index');
    }

}
