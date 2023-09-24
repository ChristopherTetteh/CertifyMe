import "./ViewCertificate.css";

const ViewCertificate = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="card">
              <div class="card-body">
                <h5 class="font-size-16 me-3 mb-0">CertifyMe</h5>

                <div class="row mt-4"></div>

                <div class="d-flex flex-wrap">
                  <h5 class="font-size-16 me-3">Recent Uploads</h5>
                  <div class="ms-auto">
                    <a href="javascript: void(0);" class="fw-medium text-reset">
                      View All
                    </a>
                  </div>
                </div>
                <hr class="mt-2" />
                <div class="table-responsive">
                  <table class="table align-middle table-nowrap table-hover mb-0">
                    <thead class="table-light">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Issue Date</th>
                        <th scope="col">Issuer Name</th>
                        <th scope="col" colspan="2">
                          Address
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a
                            href="javascript: void(0);"
                            class="text-dark fw-medium"
                          >
                            <i class="mdi mdi-file-document font-size-16 align-middle text-primary me-2"></i>{" "}
                            index.html
                          </a>
                        </td>
                        <td>12-10-2020, 09:45</td>
                        <td>09 KB</td>

                        <td>
                          <div class="dropdown">
                            <a
                              class="font-size-16 text-muted"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                            >
                              <i class="mdi mdi-dots-horizontal"></i>
                            </a>

                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">
                                Open
                              </a>
                              <a class="dropdown-item" href="#">
                                Edit
                              </a>
                              <a class="dropdown-item" href="#">
                                Rename
                              </a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#">
                                Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="javascript: void(0);"
                            class="text-dark fw-medium"
                          >
                            <i class="mdi mdi-folder-zip font-size-16 align-middle text-warning me-2"></i>{" "}
                            Project-A.zip
                          </a>
                        </td>
                        <td>11-10-2020, 17:05</td>
                        <td>115 KB</td>

                        <td>
                          <div class="dropdown">
                            <a
                              class="font-size-16 text-muted"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                            >
                              <i class="mdi mdi-dots-horizontal"></i>
                            </a>

                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">
                                Open
                              </a>
                              <a class="dropdown-item" href="#">
                                Edit
                              </a>
                              <a class="dropdown-item" href="#">
                                Rename
                              </a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#">
                                Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="javascript: void(0);"
                            class="text-dark fw-medium"
                          >
                            <i class="mdi mdi-image font-size-16 align-middle text-muted me-2"></i>{" "}
                            Img-1.jpeg
                          </a>
                        </td>
                        <td>11-10-2020, 13:26</td>
                        <td>86 KB</td>

                        <td>
                          <div class="dropdown">
                            <a
                              class="font-size-16 text-muted"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                            >
                              <i class="mdi mdi-dots-horizontal"></i>
                            </a>

                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">
                                Open
                              </a>
                              <a class="dropdown-item" href="#">
                                Edit
                              </a>
                              <a class="dropdown-item" href="#">
                                Rename
                              </a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#">
                                Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="javascript: void(0);"
                            class="text-dark fw-medium"
                          >
                            <i class="mdi mdi-text-box font-size-16 align-middle text-muted me-2"></i>{" "}
                            update list.txt
                          </a>
                        </td>
                        <td>10-10-2020, 11:32</td>
                        <td>08 KB</td>

                        <td>
                          <div class="dropdown">
                            <a
                              class="font-size-16 text-muted"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                            >
                              <i class="mdi mdi-dots-horizontal"></i>
                            </a>

                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">
                                Open
                              </a>
                              <a class="dropdown-item" href="#">
                                Edit
                              </a>
                              <a class="dropdown-item" href="#">
                                Rename
                              </a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#">
                                Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="javascript: void(0);"
                            class="text-dark fw-medium"
                          >
                            <i class="mdi mdi-folder font-size-16 align-middle text-warning me-2"></i>{" "}
                            Project B
                          </a>
                        </td>
                        <td>10-10-2020, 10:51</td>
                        <td>72 KB</td>

                        <td>
                          <div class="dropdown">
                            <a
                              class="font-size-16 text-muted"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                            >
                              <i class="mdi mdi-dots-horizontal"></i>
                            </a>

                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">
                                Open
                              </a>
                              <a class="dropdown-item" href="#">
                                Edit
                              </a>
                              <a class="dropdown-item" href="#">
                                Rename
                              </a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#">
                                Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="javascript: void(0);"
                            class="text-dark fw-medium"
                          >
                            <i class="mdi mdi-text-box font-size-16 align-middle text-muted me-2"></i>{" "}
                            Changes list.txt
                          </a>
                        </td>
                        <td>09-10-2020, 17:05</td>
                        <td>07 KB</td>

                        <td>
                          <div class="dropdown">
                            <a
                              class="font-size-16 text-muted"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                            >
                              <i class="mdi mdi-dots-horizontal"></i>
                            </a>

                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">
                                Open
                              </a>
                              <a class="dropdown-item" href="#">
                                Edit
                              </a>
                              <a class="dropdown-item" href="#">
                                Rename
                              </a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#">
                                Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="javascript: void(0);"
                            class="text-dark fw-medium"
                          >
                            <i class="mdi mdi-image font-size-16 align-middle text-success me-2"></i>{" "}
                            Img-2.png
                          </a>
                        </td>
                        <td>09-10-2020, 15:12</td>
                        <td>31 KB</td>

                        <td>
                          <div class="dropdown">
                            <a
                              class="font-size-16 text-muted"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                            >
                              <i class="mdi mdi-dots-horizontal"></i>
                            </a>

                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">
                                Open
                              </a>
                              <a class="dropdown-item" href="#">
                                Edit
                              </a>
                              <a class="dropdown-item" href="#">
                                Rename
                              </a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#">
                                Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="javascript: void(0);"
                            class="text-dark fw-medium"
                          >
                            <i class="mdi mdi-folder font-size-16 align-middle text-warning me-2"></i>{" "}
                            Project C
                          </a>
                        </td>
                        <td>09-10-2020, 10:11</td>
                        <td>20 KB</td>

                        <td>
                          <div class="dropdown">
                            <a
                              class="font-size-16 text-muted"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                            >
                              <i class="mdi mdi-dots-horizontal"></i>
                            </a>

                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">
                                Open
                              </a>
                              <a class="dropdown-item" href="#">
                                Edit
                              </a>
                              <a class="dropdown-item" href="#">
                                Rename
                              </a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#">
                                Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="javascript: void(0);"
                            class="text-dark fw-medium"
                          >
                            <i class="bx bxs-file font-size-16 align-middle text-primary me-2"></i>{" "}
                            starter-page.html
                          </a>
                        </td>
                        <td>08-10-2020, 03:22</td>
                        <td>11 KB</td>

                        <td>
                          <div class="dropdown">
                            <a
                              class="font-size-16 text-muted"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                            >
                              <i class="mdi mdi-dots-horizontal"></i>
                            </a>

                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">
                                Open
                              </a>
                              <a class="dropdown-item" href="#">
                                Edit
                              </a>
                              <a class="dropdown-item" href="#">
                                Rename
                              </a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#">
                                Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCertificate;
