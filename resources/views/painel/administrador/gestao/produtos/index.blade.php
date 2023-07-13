@extends('layouts/main')
@section('title', 'PwrSaúde - Dashboard')

@section('pageStyles')

@endsection

@section('content')
<!-- Ini: Content -->
<div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Gestão de Produtos /</span> Novo Produto</h4>

    <!-- Create Deal Wizard -->
    <div id="wizard-create-deal" class="bs-stepper vertical mt-2">
        <div class="bs-stepper-header">

            <div class="line"></div>
            <div class="step" data-target="#deal-details">
                <button type="button" class="step-trigger">
                    <span class="bs-stepper-circle">
                        <i class="bx bx-detail"></i>
                    </span>
                    <span class="bs-stepper-label">
                        <span class="bs-stepper-title">Detalhes do Produto</span>
                        <span class="bs-stepper-subtitle"></span>
                    </span>
                </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#deal-usage">
                <button type="button" class="step-trigger">
                    <span class="bs-stepper-circle">
                        <i class="bx bx-credit-card"></i>
                    </span>
                    <span class="bs-stepper-label">
                        <span class="bs-stepper-title">Deal Usage</span>
                        <span class="bs-stepper-subtitle">Limitations & Offers</span>
                    </span>
                </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#review-complete">
                <button type="button" class="step-trigger">
                    <span class="bs-stepper-circle">
                        <i class="bx bx-rocket"></i>
                    </span>
                    <span class="bs-stepper-label">
                        <span class="bs-stepper-title">Review & Complete</span>
                        <span class="bs-stepper-subtitle">Launch a deal!</span>
                    </span>
                </button>
            </div>
        </div>
        <div class="bs-stepper-content">
            <form id="wizard-create-deal-form" onSubmit="return false">

                <!-- Detalhes do Produito -->
                <div id="deal-details" class="content">
                    <div class="row g-3">
                        <div class="col-sm-6">
                            <label class="form-label" for="dealTitle">Nome do Produto</label>
                            <input type="text" id="dealTitle" name="dealTitle" class="form-control" placeholder="Black friday sale, 25% off" />
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label" for="dealCode">Deal Code</label>
                            <input type="text" id="dealCode" name="dealCode" class="form-control" placeholder="25PEROFF" />
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label" for="dealDescription">Deal Description</label>
                            <textarea id="dealDescription" name="dealDescription" class="form-control" rows="5" placeholder="To sell or distribute something as a business deal"></textarea>
                        </div>
                        <div class="col-sm-6">
                            <div class="row">
                                <div class="col-12 mb-3">
                                    <label class="form-label" for="dealOfferedItem">Offered Items</label>
                                    <select class="select2" id="dealOfferedItem" name="dealOfferedItem" multiple>
                                        <option disabled value="">Select offered item</option>
                                        <option value="65328">Apple iPhone 12 Pro Max (256GB)</option>
                                        <option value="25612">Apple iPhone 12 Pro (512GB)</option>
                                        <option value="65454">Apple iPhone 12 Mini (256GB)</option>
                                        <option value="12365">Apple iPhone 11 Pro Max (256GB)</option>
                                        <option value="85466">Apple iPhone 11 (64GB)</option>
                                        <option value="98564">OnePlus Nord CE 5G (128GB)</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label class="form-label" for="dealCartCondition">Cart condition</label>
                                    <select class="form-select" id="dealCartCondition" name="dealCartCondition">
                                        <option disabled value="">Select cart condition</option>
                                        <option value="all">Cart must contain all selected Downloads</option>
                                        <option value="any">Cart needs one or more of the selected Downloads</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <label for="dealDuration" class="form-label">Deal Duration</label>
                            <input type="text" id="dealDuration" name="dealDuration" class="form-control" placeholder="YYYY-MM-DD to YYYY-MM-DD" />
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label">Notify Users</label>
                            <div class="row">
                                <div class="col mt-2">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="dealNotifyEmail" name="dealNotifyEmail" value="email" />
                                        <label class="form-check-label" for="dealNotifyEmail">Email</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="dealNotifySMS" name="dealNotifySMS" value="sms" />
                                        <label class="form-check-label" for="dealNotifySMS">SMS</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="dealNotifyPush" name="dealNotifyPush" value="push" />
                                        <label class="form-check-label" for="dealNotifyPush">Push Notification</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 d-flex justify-content-between">
                            <button class="btn btn-primary btn-prev">
                                <i class="bx bx-chevron-left bx-sm ms-sm-n2"></i>
                                <span class="align-middle d-sm-inline-block d-none">Previous</span>
                            </button>
                            <button class="btn btn-primary btn-next">
                                <span class="align-middle d-sm-inline-block d-none me-sm-1">Next</span>
                                <i class="bx bx-chevron-right bx-sm me-sm-n2"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Deal Usage -->
                <div id="deal-usage" class="content">
                    <div class="row g-3">
                        <div class="col-sm-6">
                            <label class="form-label" for="dealUserType">User Type</label>
                            <select id="dealUserType" name="dealUserType" class="form-select">
                                <option selected disabled value="">Select user type</option>
                                <option value="all">All</option>
                                <option value="registered">Registered</option>
                                <option value="unregistered">Unregistered</option>
                                <option value="prime-members">Prime members</option>
                            </select>
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label" for="dealMaxUsers">Max Users</label>
                            <input type="number" id="dealMaxUsers" name="dealMaxUsers" class="form-control" placeholder="500" />
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label" for="dealMinimumCartAmount">Minimum Cart Amount</label>
                            <input type="number" id="dealMinimumCartAmount" name="dealMinimumCartAmount" class="form-control" placeholder="$99" />
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label" for="dealPromotionalFee">Promotional Fee</label>
                            <input type="number" id="dealPromotionalFee" name="dealPromotionalFee" class="form-control" placeholder="$9" />
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label" for="dealPaymentMethod">Payment Method</label>
                            <select id="dealPaymentMethod" name="dealPaymentMethod" class="form-select">
                                <option selected disabled value="">Select payment method</option>
                                <option value="any">Any</option>
                                <option value="credit-card">Credit Card</option>
                                <option value="net-banking">Net Banking</option>
                                <option value="wallet">Wallet</option>
                            </select>
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label" for="dealStatus">Deal Status</label>
                            <select id="dealStatus" name="dealStatus" class="form-select">
                                <option selected disabled value="">Select status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="suspend">Suspend</option>
                                <option value="abandon">Abandone</option>
                            </select>
                        </div>
                        <div class="col-lg-12">
                            <label class="switch">
                                <input type="checkbox" class="switch-input" id="dealLimitUser" name="dealLimitUser" />
                                <span class="switch-toggle-slider">
                                    <span class="switch-on"></span>
                                    <span class="switch-off"></span>
                                </span>
                                <span class="switch-label"> Limit this discount to a single-use per customer?</span>
                            </label>
                        </div>
                        <div class="col-12 d-flex justify-content-between">
                            <button class="btn btn-primary btn-prev">
                                <i class="bx bx-chevron-left bx-sm ms-sm-n2"></i>
                                <span class="align-middle d-sm-inline-block d-none">Previous</span>
                            </button>
                            <button class="btn btn-primary btn-next">
                                <span class="align-middle d-sm-inline-block d-none me-sm-1">Next</span>
                                <i class="bx bx-chevron-right bx-sm me-sm-n2"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Review & Complete -->
                <div id="review-complete" class="content">
                    <div class="row g-3">
                        <div class="col-lg-6">
                            <div class="row">
                                <div class="col-12 mb-0">
                                    <h3>Almost done! 🚀</h3>
                                    <p>Confirm your deal details information and submit to create it.</p>
                                </div>
                                <div class="col-12 mb-0">
                                    <table class="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td class="ps-0 align-top text-nowrap py-1"><strong>Deal Type</strong></td>
                                                <td class="px-0 py-1">Percentage</td>
                                            </tr>
                                            <tr>
                                                <td class="ps-0 align-top text-nowrap py-1"><strong>Amount</strong></td>
                                                <td class="px-0 py-1">25%</td>
                                            </tr>
                                            <tr>
                                                <td class="ps-0 align-top text-nowrap py-1"><strong>Deal Code</strong></td>
                                                <td class="px-0 py-1">
                                                    <div class="badge bg-label-warning">25PEROFF</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="ps-0 align-top text-nowrap py-1"><strong>Deal Title</strong></td>
                                                <td class="px-0 py-1">Black friday sale, 25% OFF</td>
                                            </tr>
                                            <tr>
                                                <td class="ps-0 align-top text-nowrap py-1"><strong>Deal Duration</strong></td>
                                                <td class="px-0 py-1">
                                                    <span class="fw-semibold">2021-07-14</span> to
                                                    <span class="fw-semibold">2021-07-30</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 d-flex align-items-center justify-content-center">
                            <img class="img-fluid w-px-200" src="../../assets/img/illustrations/man-with-laptop-light.png" alt="deal image cap" data-app-light-img="illustrations/man-with-laptop-light.png" data-app-dark-img="illustrations/man-with-laptop-dark.png" />
                        </div>
                        <div class="col-md-12">
                            <label class="switch">
                                <input type="checkbox" class="switch-input" id="dealConfirmed" name="dealConfirmed" />
                                <span class="switch-toggle-slider">
                                    <span class="switch-on"></span>
                                    <span class="switch-off"></span>
                                </span>
                                <span class="switch-label"> I have confirmed the deal details.</span>
                            </label>
                        </div>
                        <div class="col-12 d-flex justify-content-between">
                            <button class="btn btn-primary btn-prev">
                                <i class="bx bx-chevron-left bx-sm ms-sm-n2"></i>
                                <span class="align-middle d-sm-inline-block d-none">Previous</span>
                            </button>
                            <button class="btn btn-success btn-submit btn-next">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- /Create Deal Wizard -->
</div>
<!-- / End: Content -->
@endsection

@section('pageScript')
<script src="{{asset('assets/vendor/libs/formvalidation/dist/js/plugins/Bootstrap5.min.js')}}"></script>
<script src="{{asset('assets/vendor/libs/formvalidation/dist/js/plugins/AutoFocus.min.js')}}"></script>
<script src="{{asset('assets/js/wizard-ex-create-deal.js')}}"></script>

@endsection