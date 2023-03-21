<?php

namespace App\Http\Traits;

use Symfony\Component\HttpFoundation\File\UploadedFile;


trait FileUploadTrait
{

    public function movedAsset($folder)
    {
        return 'uploads/' . $folder . '/';
    }
    public function assetUrl($folder, $asset_link)
    {
        return 'uploads/' . $folder . '/' . $asset_link;
    }

    public function uploadFile($file, $folder)
    {
        $fileName = "";
        if ($file) {
            $fileName = md5($file->getClientOriginalName() . time()) . "." . $file->getClientOriginalExtension();
            $file->move($this->movedAsset($folder),$fileName);
            $fileName = $this->assetUrl($folder,$fileName);
            return $fileName;
        }
    }
}
