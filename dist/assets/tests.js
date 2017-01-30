'use strict';

define('member-search/tests/adapters/application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('member-search/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('member-search/tests/bootstrap_3_7_min.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | bootstrap_3_7_min.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'bootstrap_3_7_min.js should pass jshint.\nbootstrap_3_7_min.js: line 6, col 17, Expected \'===\' and instead saw \'==\'.\nbootstrap_3_7_min.js: line 6, col 31, Expected \'{\' and instead saw \'throw\'.\nbootstrap_3_7_min.js: line 6, col 180, Expected \'===\' and instead saw \'==\'.\nbootstrap_3_7_min.js: line 6, col 189, Expected \'===\' and instead saw \'==\'.\nbootstrap_3_7_min.js: line 6, col 210, Expected \'{\' and instead saw \'throw\'.\nbootstrap_3_7_min.js: line 6, col 317, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 567, Expected \'{\' and instead saw \'if\'.\nbootstrap_3_7_min.js: line 6, col 590, Expected \'{\' and instead saw \'return\'.\nbootstrap_3_7_min.js: line 6, col 615, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 715, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 775, Expected an assignment or function call and instead saw an expression.\nbootstrap_3_7_min.js: line 6, col 776, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 805, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 1016, Expected \'{\' and instead saw \'return\'.\nbootstrap_3_7_min.js: line 6, col 1064, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 1066, Expected an assignment or function call and instead saw an expression.\nbootstrap_3_7_min.js: line 6, col 1067, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 1068, Expected an assignment or function call and instead saw an expression.\nbootstrap_3_7_min.js: line 6, col 1069, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 1126, If a strict mode function is executed using function invocation, its \'this\' value will be undefined.\nbootstrap_3_7_min.js: line 6, col 1209, A constructor name should start with an uppercase letter.\nbootstrap_3_7_min.js: line 6, col 1228, Expected \'===\' and instead saw \'==\'.\nbootstrap_3_7_min.js: line 6, col 1249, Expected an assignment or function call and instead saw an expression.\nbootstrap_3_7_min.js: line 6, col 1250, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 1252, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 1327, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 1462, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 1557, Expected an assignment or function call and instead saw an expression.\nbootstrap_3_7_min.js: line 6, col 1836, Expected an assignment or function call and instead saw an expression.\nbootstrap_3_7_min.js: line 6, col 1837, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 1837, Expected an assignment or function call and instead saw an expression.\nbootstrap_3_7_min.js: line 6, col 1951, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 2013, Expected an assignment or function call and instead saw an expression.\nbootstrap_3_7_min.js: line 6, col 2014, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 2071, If a strict mode function is executed using function invocation, its \'this\' value will be undefined.\nbootstrap_3_7_min.js: line 6, col 2140, Expected \'===\' and instead saw \'==\'.\nbootstrap_3_7_min.js: line 6, col 2180, A constructor name should start with an uppercase letter.\nbootstrap_3_7_min.js: line 6, col 2201, Expected \'===\' and instead saw \'==\'.\nbootstrap_3_7_min.js: line 6, col 2229, Expected an assignment or function call and instead saw an expression.\nbootstrap_3_7_min.js: line 6, col 2230, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 2232, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 2327, Expected an assignment or function call and instead saw an expression.\nbootstrap_3_7_min.js: line 6, col 2328, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 2631, Expected \'===\' and instead saw \'==\'.\nbootstrap_3_7_min.js: line 6, col 2764, Expected an assignment or function call and instead saw an expression.\nbootstrap_3_7_min.js: line 6, col 2765, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 2774, Expected an assignment or function call and instead saw an expression.\nbootstrap_3_7_min.js: line 6, col 2775, Missing semicolon.\nbootstrap_3_7_min.js: line 6, col 2923, Expected \'===\' and instead saw \'==\'.\nbootstrap_3_7_min.js: line 6, col 3051, Expected \'===\' and instead saw \'==\'.\nbootstrap_3_7_min.js: line 6, col 3051, Too many errors. (75% scanned).\n\n51 errors');
  });
});
define('member-search/tests/controllers/profile.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/profile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/profile.js should pass jshint.\ncontrollers/profile.js: line 39, col 88, \'data\' is defined but never used.\ncontrollers/profile.js: line 46, col 47, Missing semicolon.\n\n2 errors');
  });
});
define('member-search/tests/controllers/search.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/search.js should pass jshint.');
  });
});
define('member-search/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('member-search/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('member-search/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'member-search/tests/helpers/start-app', 'member-search/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _memberSearchTestsHelpersStartApp, _memberSearchTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _memberSearchTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _memberSearchTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('member-search/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('member-search/tests/helpers/resolver', ['exports', 'member-search/resolver', 'member-search/config/environment'], function (exports, _memberSearchResolver, _memberSearchConfigEnvironment) {

  var resolver = _memberSearchResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _memberSearchConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _memberSearchConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('member-search/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('member-search/tests/helpers/start-app', ['exports', 'ember', 'member-search/app', 'member-search/config/environment'], function (exports, _ember, _memberSearchApp, _memberSearchConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _memberSearchConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _memberSearchApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('member-search/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('member-search/tests/models/identification.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/identification.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/identification.js should pass jshint.');
  });
});
define('member-search/tests/models/member.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/member.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/member.js should pass jshint.');
  });
});
define('member-search/tests/models/military.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/military.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/military.js should pass jshint.');
  });
});
define('member-search/tests/models/product.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/product.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/product.js should pass jshint.');
  });
});
define('member-search/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('member-search/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('member-search/tests/routes/profile.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/profile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/profile.js should pass jshint.');
  });
});
define('member-search/tests/routes/results.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/results.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/results.js should pass jshint.');
  });
});
define('member-search/tests/routes/search.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/search.js should pass jshint.');
  });
});
define('member-search/tests/serializers/member.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | serializers/member.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/member.js should pass jshint.');
  });
});
define('member-search/tests/test-helper', ['exports', 'member-search/tests/helpers/resolver', 'ember-qunit'], function (exports, _memberSearchTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_memberSearchTestsHelpersResolver['default']);
});
define('member-search/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('member-search/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('member-search/tests/unit/adapters/application-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/adapters/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('member-search/tests/unit/controllers/profile-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:profile', 'Unit | Controller | profile', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('member-search/tests/unit/controllers/profile-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/profile-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/profile-test.js should pass jshint.');
  });
});
define('member-search/tests/unit/controllers/search-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:search', 'Unit | Controller | search', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('member-search/tests/unit/controllers/search-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/search-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/search-test.js should pass jshint.');
  });
});
define('member-search/tests/unit/models/identification-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('identification', 'Unit | Model | identification', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('member-search/tests/unit/models/identification-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/identification-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/identification-test.js should pass jshint.');
  });
});
define('member-search/tests/unit/models/member-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('member', 'Unit | Model | member', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('member-search/tests/unit/models/member-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/member-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/member-test.js should pass jshint.');
  });
});
define('member-search/tests/unit/models/military-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('military', 'Unit | Model | military', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('member-search/tests/unit/models/military-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/military-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/military-test.js should pass jshint.');
  });
});
define('member-search/tests/unit/models/product-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('product', 'Unit | Model | product', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('member-search/tests/unit/models/product-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/product-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/product-test.js should pass jshint.');
  });
});
define('member-search/tests/unit/routes/profile-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:profile', 'Unit | Route | profile', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('member-search/tests/unit/routes/profile-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/profile-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/profile-test.js should pass jshint.');
  });
});
define('member-search/tests/unit/routes/results-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:results', 'Unit | Route | results', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('member-search/tests/unit/routes/results-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/results-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/results-test.js should pass jshint.');
  });
});
define('member-search/tests/unit/routes/search-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:search', 'Unit | Route | search', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('member-search/tests/unit/routes/search-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/search-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/search-test.js should pass jshint.');
  });
});
define('member-search/tests/unit/serializers/member-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('member', 'Unit | Serializer | member', {
    // Specify the other units that are required for this test.
    needs: ['serializer:member']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('member-search/tests/unit/serializers/member-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/serializers/member-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/member-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('member-search/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
